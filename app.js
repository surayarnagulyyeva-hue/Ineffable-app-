(function(){
  "use strict";

  const state = {
    lang: "en",
    category: "all"
  };

  const tabsEl = document.getElementById("tabs");
  const chipsEl = document.getElementById("chips");
  const listEl = document.getElementById("lessonList");
  const overlayEl = document.getElementById("overlay");
  const notebookEl = document.getElementById("notebook");
  const heroNoteEl = document.getElementById("heroNote");

  function currentLangData(){
    return GRAMMAR_DATA[state.lang];
  }

  function renderTabs(){
    tabsEl.innerHTML = "";
    ["en","ru"].forEach(function(langKey){
      const data = GRAMMAR_DATA[langKey];
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (state.lang === langKey ? " active" : "");
      btn.dataset.lang = langKey;
      btn.innerHTML = '<span class="dot"></span>' + data.label + " Grameri";
      btn.addEventListener("click", function(){
        state.lang = langKey;
        state.category = "all";
        renderAll();
      });
      tabsEl.appendChild(btn);
    });
  }

  function renderChips(){
    chipsEl.innerHTML = "";
    const data = currentLangData();

    const allChip = document.createElement("button");
    allChip.className = "chip" + (state.category === "all" ? " active" : "");
    allChip.innerHTML = '<span class="mark">*</span> Tümü';
    allChip.addEventListener("click", function(){
      state.category = "all";
      renderAll();
    });
    chipsEl.appendChild(allChip);

    data.categories.forEach(function(cat){
      const chip = document.createElement("button");
      chip.className = "chip" + (state.category === cat.id ? " active" : "");
      chip.innerHTML = '<span class="mark">' + cat.mark + "</span>" + cat.label;
      chip.addEventListener("click", function(){
        state.category = cat.id;
        renderAll();
      });
      chipsEl.appendChild(chip);
    });
  }

  function renderList(){
    listEl.innerHTML = "";
    const data = currentLangData();
    const lessons = data.lessons.filter(function(l){
      return state.category === "all" || l.category === state.category;
    });

    if(lessons.length === 0){
      const empty = document.createElement("p");
      empty.style.color = "var(--muted)";
      empty.style.fontSize = "13px";
      empty.style.padding = "10px 0";
      empty.textContent = "Bu kategoride henüz ders yok.";
      listEl.appendChild(empty);
      return;
    }

    lessons.forEach(function(lesson){
      const card = document.createElement("button");
      card.className = "lesson-card";
      card.innerHTML =
        '<span class="lc-left">' +
          '<span class="lc-term">' + lesson.term + "</span>" +
          '<span class="lc-def">' + lesson.definition + "</span>" +
        "</span>" +
        '<span class="level-badge">' + lesson.level + "</span>";
      card.addEventListener("click", function(){ openLesson(lesson); });
      listEl.appendChild(card);
    });
  }

  function renderHeroNote(){
    const data = currentLangData();
    const notes = {
      en: "İngilizcenin temel yapı taşlarını — isimlerden zamanlara, artikellerden kip fiillere — Türkçe açıklamalarla, defter düzeninde öğren.",
      ru: "Rusçanın hâllerini, fiil görünüşünü ve cinsiyet sistemini Türkçe açıklamalarla, kısa ve düzenli derslerle keşfet."
    };
    heroNoteEl.textContent = notes[state.lang] || "";
  }

  function openLesson(lesson){
    notebookEl.innerHTML = renderNotebook(lesson);
    overlayEl.classList.add("open");
    document.body.style.overflow = "hidden";

    const closeBtn = notebookEl.querySelector(".nb-close");
    closeBtn.addEventListener("click", closeLesson);

    const hintBtn = notebookEl.querySelector(".nb-hint-btn");
    if(hintBtn){
      hintBtn.addEventListener("click", function(){
        const hintEl = notebookEl.querySelector(".nb-hint");
        hintEl.classList.toggle("shown");
      });
    }
  }

  function closeLesson(){
    overlayEl.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderNotebook(lesson){
    const factsHtml = lesson.quickFacts.map(function(f){
      return "<li>" + f + "</li>";
    }).join("");

    const typesHtml = lesson.types.map(function(t){
      const exHtml = t.examples.map(function(e){ return e; }).join(" &middot; ");
      return (
        '<div class="nb-type">' +
          '<span class="arrow">&rarr;</span>' +
          '<span class="body">' +
            '<span class="name">' + t.name + "</span>" +
            '<div class="def">' + t.def + "</div>" +
            '<div class="ex">' + exHtml + "</div>" +
          "</span>" +
        "</div>"
      );
    }).join("");

    return (
      '<div class="notebook-inner">' +
        '<button class="nb-close" aria-label="Kapat">&times;</button>' +
        '<span class="nb-level">SEVİYE ' + lesson.level + "</span>" +
        '<div class="nb-term-box">' + lesson.term + "</div>" +
        '<ul class="nb-facts">' + factsHtml + "</ul>" +
        '<div class="nb-def">' + lesson.definition + "</div>" +
        '<div class="nb-types-label">' + lesson.typesLabel + "</div>" +
        typesHtml +
        '<div class="nb-practice">' +
          '<span class="label">Alıştırma</span>' +
          '<div class="q">' + lesson.practice.question + "</div>" +
          '<button class="nb-hint-btn">İpucunu göster</button>' +
          '<div class="nb-hint">' + lesson.practice.hint + "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function renderAll(){
    renderTabs();
    renderChips();
    renderList();
    renderHeroNote();
  }

  overlayEl.addEventListener("click", function(e){
    if(e.target === overlayEl) closeLesson();
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") closeLesson();
  });

  renderAll();

  // ---------- PWA: service worker + install prompt ----------
  if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
      navigator.serviceWorker.register("sw.js").catch(function(err){
        console.warn("Service worker kaydı başarısız:", err);
      });
    });
  }

  let deferredPrompt = null;
  const installBar = document.getElementById("installBar");
  const installBtn = document.getElementById("installBtn");

  window.addEventListener("beforeinstallprompt", function(e){
    e.preventDefault();
    deferredPrompt = e;
    installBar.classList.add("show");
  });

  if(installBtn){
    installBtn.addEventListener("click", function(){
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(function(){
        deferredPrompt = null;
        installBar.classList.remove("show");
      });
    });
  }

  window.addEventListener("appinstalled", function(){
    installBar.classList.remove("show");
  });
})();
