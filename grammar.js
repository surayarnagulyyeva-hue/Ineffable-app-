/* Ineffable — grammar data
   Each lesson is a small notebook with 2 pages:
   pages[0] -> quickFacts, definition, types (the core lesson, "notebook" style)
   pages[1] -> commonMistakes, moreExamples, tip (deeper dive)
   practice -> shown at the end of the last page
*/

const GRAMMAR_DATA = {
  en: {
    label: "İngilizce",
    native: "English",
    accent: "gold",
    categories: [
      { id: "nouns", label: "İsimler", mark: "N" },
      { id: "tenses", label: "Zamanlar", mark: "T" },
      { id: "articles", label: "Artikeller", mark: "A" },
      { id: "modals", label: "Kip Fiilleri", mark: "M" },
      { id: "voice", label: "Edilgen Çatı", mark: "V" },
      { id: "conditionals", label: "Koşul Cümleleri", mark: "C" },
      { id: "comparison", label: "Karşılaştırma", mark: "K" },
      { id: "pronouns", label: "Zamirler", mark: "Z" },
      { id: "prepositions", label: "Edatlar", mark: "E" }
    ],
    lessons: [
      {
        id: "en-nouns",
        category: "nouns",
        level: "A1",
        term: "NOUN",
        pages: [
          {
            quickFacts: [
              "Gözlerini kapat.",
              "Aç.",
              "Gördüğün her şey bir isimdir (noun).",
              "Soyut isimler görülemez, dokunulamaz, duyulamaz, koklanamaz ya da tadılamaz."
            ],
            definition:
              "Bir isim (noun); bir kişinin, yerin, nesnenin, niteliğin, durumun ya da fikrin adıdır.",
            typesLabel: "İSİM TÜRLERİ — 5 TİP",
            types: [
              { name: "Özel İsim (Proper Noun)", def: "Belirli bir kişi, yer ya da nesnenin özel adıdır.", examples: ["Ram", "Delhi", "Mohan", "Sudha", "Kolkata"] },
              { name: "Cins İsim (Common Noun)", def: "Aynı sınıftaki her kişi, yer ya da nesneye verilen genel addır.", examples: ["boy", "girl", "city", "river", "table"] },
              { name: "Soyut İsim (Abstract Noun)", def: "Bir niteliğin, durumun ya da fikrin adıdır.", examples: ["kindness", "childhood", "honesty", "wisdom", "happiness"] },
              { name: "Topluluk İsmi (Collective Noun)", def: "Tek bir birim sayılan bir grup insan ya da nesnenin adıdır.", examples: ["class", "crowd", "team", "army", "bouquet"] },
              { name: "Madde İsmi (Material Noun)", def: "Nesnelerin yapıldığı bir madde ya da malzemenin adıdır.", examples: ["sugar", "oil", "wood", "gold", "silver", "water"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Özel isimleri küçük harfle yazmak (delhi yerine Delhi olmalı).",
              "Soyut isimleri sayılabilir gibi kullanmak (an advice yerine some advice / a piece of advice).",
              "Topluluk isimlerinde tekil/çoğul fiil karışıklığı (the team is / the team are — İngiliz ve Amerikan İngilizcesi farklıdır)."
            ],
            moreExamples: [
              "loyalty, freedom, courage — soyut isimlere ek örnekler",
              "audience, committee, family — topluluk isimlerine ek örnekler",
              "Honesty is a virtue. (Soyut isim özne olarak)"
            ],
            tip: "Bir kelimenin isim olup olmadığını anlamak için önüne 'a/an' ya da 'the' koymayı dene — eğer anlamlı oluyorsa muhtemelen bir isimdir."
          }
        ],
        practice: {
          question: "Bu cümledeki ismi bul: “Honesty is the best policy.”",
          hint: "İpucu: Cevap bir soyut isimdir (abstract noun)."
        }
      },
      {
        id: "en-present-simple",
        category: "tenses",
        level: "A1",
        term: "PRESENT SIMPLE",
        pages: [
          {
            quickFacts: [
              "Alışkanlıkları ve rutinleri anlatır.",
              "Genel doğruları ve gerçekleri anlatır.",
              "He / She / It ile fiile -s / -es eklenir."
            ],
            definition:
              "Present Simple, düzenli olarak tekrarlanan eylemleri, alışkanlıkları ve değişmeyen gerçekleri anlatmak için kullanılır.",
            typesLabel: "YAPI — 3 DURUM",
            types: [
              { name: "Olumlu", def: "Özne + fiil (+ s/es)", examples: ["She works every day.", "The sun rises in the east."] },
              { name: "Olumsuz", def: "Özne + do/does not + fiil", examples: ["I do not (don't) like coffee.", "He does not (doesn't) play chess."] },
              { name: "Soru", def: "Do/Does + özne + fiil ?", examples: ["Do you speak English?", "Does she live here?"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "He/She/It ile fiile -s eklemeyi unutmak (she work yerine she works).",
              "Olumsuz/soru cümlesinde hem do/does hem de fiile -s eklemek (does she works yerine does she work).",
              "'To be' fiiliyle do/does kullanmak (she doesn't is yerine she isn't)."
            ],
            moreExamples: [
              "always, usually, often, sometimes, never — sıklık zarfları özneden sonra gelir",
              "The shop opens at 9 and closes at 6.",
              "Water boils at 100 degrees Celsius. (genel gerçek)"
            ],
            tip: "always, usually, every day, on Mondays gibi sinyal kelimeler gördüğünde büyük ihtimalle Present Simple gerekir."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “My father ___ (work) in a bank.”",
          hint: "İpucu: Özne 'he/she/it' ise fiile -s eklenir."
        }
      },
      {
        id: "en-present-continuous",
        category: "tenses",
        level: "A2",
        term: "PRESENT CONTINUOUS",
        pages: [
          {
            quickFacts: [
              "Şu an olan bir eylemi anlatır.",
              "Geçici durumları anlatır.",
              "am/is/are + fiil-ing kalıbıyla kurulur."
            ],
            definition:
              "Present Continuous, konuşma anında devam eden ya da geçici olan eylemleri anlatmak için kullanılır.",
            typesLabel: "YAPI — 3 DURUM",
            types: [
              { name: "Olumlu", def: "Özne + am/is/are + fiil-ing", examples: ["I am reading a book.", "They are waiting outside."] },
              { name: "Olumsuz", def: "Özne + am/is/are + not + fiil-ing", examples: ["She is not (isn't) listening.", "We are not (aren't) leaving yet."] },
              { name: "Soru", def: "Am/Is/Are + özne + fiil-ing ?", examples: ["Is he sleeping?", "Are you coming with us?"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Durum fiilleriyle (know, want, love, believe) -ing kullanmak (I'm knowing yerine I know).",
              "am/is/are yardımcı fiilini unutmak (she reading yerine she is reading).",
              "-ing eklerken yazım kurallarını unutmak (writeing yerine writing, runing yerine running)."
            ],
            moreExamples: [
              "know, want, love, believe, own, need — genelde -ing almayan durum fiilleri",
              "I'm meeting her tomorrow at 5. (planlanmış yakın gelecek)",
              "He is always losing his keys! (rahatsız edici alışkanlık, 'always' ile)"
            ],
            tip: "Present Continuous sadece 'şimdi' değil, planlanmış yakın gelecek eylemler için de kullanılabilir: 'We're leaving tomorrow.'"
          }
        ],
        practice: {
          question: "Boşluğu doldur: “Look! It ___ (rain) outside.”",
          hint: "İpucu: Şu anda olan bir eylem."
        }
      },
      {
        id: "en-past-simple",
        category: "tenses",
        level: "A2",
        term: "PAST SIMPLE",
        pages: [
          {
            quickFacts: [
              "Geçmişte tamamlanmış eylemleri anlatır.",
              "Düzenli fiillere -ed eklenir.",
              "Düzensiz fiillerin ikinci hâli ezbere öğrenilir (go → went)."
            ],
            definition:
              "Past Simple, geçmişte belirli bir zamanda başlayıp biten eylemleri anlatmak için kullanılır.",
            typesLabel: "YAPI — 3 DURUM",
            types: [
              { name: "Olumlu", def: "Özne + fiil-ed (ya da düzensiz 2. hâl)", examples: ["She worked yesterday.", "They went to Paris."] },
              { name: "Olumsuz", def: "Özne + did not + fiil (yalın hâl)", examples: ["I did not (didn't) see him.", "We did not (didn't) go out."] },
              { name: "Soru", def: "Did + özne + fiil (yalın hâl) ?", examples: ["Did you call her?", "Did they arrive on time?"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Düzensiz fiillere -ed eklemek (goed yerine went, buyed yerine bought).",
              "Soru/olumsuz cümlede fiili de çekimlemek (did you went yerine did you go).",
              "was/were karışıklığı (I were yerine I was, they was yerine they were)."
            ],
            moreExamples: [
              "buy → bought, go → went, see → saw, take → took — sık kullanılan düzensiz fiiller",
              "yesterday, last week, in 2020, two days ago — belirli geçmiş zaman ifadeleri",
              "When I was young, I lived in Ankara."
            ],
            tip: "Yesterday, last night, in 1999 gibi belirli bir geçmiş zaman ifadesi varsa, Present Perfect değil Past Simple kullanılır."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “I ___ (see) that movie last week.”",
          hint: "İpucu: 'see' düzensiz bir fiildir, 2. hâli 'saw'dır."
        }
      },
      {
        id: "en-future",
        category: "tenses",
        level: "A2",
        term: "FUTURE: WILL / GOING TO",
        pages: [
          {
            quickFacts: [
              "İki temel gelecek zaman yapısı vardır: will ve going to.",
              "Will, o an alınan kararları ve tahminleri anlatır.",
              "Going to, önceden planlanmış niyetleri anlatır."
            ],
            definition:
              "Gelecek zaman, konuşma anında verilen kararlar için 'will', önceden yapılmış planlar için 'be going to' ile kurulur.",
            typesLabel: "İKİ YAPI — 2 TİP",
            types: [
              { name: "Will", def: "Özne + will + fiil (yalın hâl) — anlık karar, tahmin, söz.", examples: ["I think it will rain.", "I'll help you with that."] },
              { name: "Be going to", def: "Özne + am/is/are + going to + fiil — önceden yapılmış plan.", examples: ["We are going to visit Rome in July.", "She is going to start a new job."] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Önceden yapılmış bir plan için 'will' kullanmak (I'll visit Rome next month yerine I'm going to visit).",
              "Anlık kararlar için 'going to' kullanmak.",
              "'going to' yapısında 'be' fiilini unutmak (she going to yerine she is going to)."
            ],
            moreExamples: [
              "The phone is ringing — I'll get it! (anlık karar)",
              "We're going to paint the kitchen this weekend. (önceden plan)",
              "Present Continuous da yakın plan için kullanılabilir: I'm meeting him at 5."
            ],
            tip: "Karar konuşma anında mı verildi (will), yoksa önceden mi planlandı (going to) — kendine bunu sor."
          }
        ],
        practice: {
          question: "Hangisi doğru? “Look at those clouds! It ___ (will/is going to) rain.”",
          hint: "İpucu: Şu anki bir kanıta dayanan tahmin 'going to' ile yapılır."
        }
      },
      {
        id: "en-present-perfect",
        category: "tenses",
        level: "B1",
        term: "PRESENT PERFECT",
        pages: [
          {
            quickFacts: [
              "Geçmişte olan ama şimdiki zamanla bağlantılı eylemleri anlatır.",
              "have/has + fiilin 3. hâli (past participle) ile kurulur.",
              "Kesin bir zaman belirtilmez (yesterday, last year gibi ifadeler kullanılmaz)."
            ],
            definition:
              "Present Perfect, geçmişte gerçekleşmiş ama sonucu ya da etkisi şimdiki zamanda hissedilen eylemleri anlatmak için kullanılır.",
            typesLabel: "YAPI — 3 DURUM",
            types: [
              { name: "Olumlu", def: "Özne + have/has + 3. hâl fiil", examples: ["I have finished my homework.", "She has visited Japan."] },
              { name: "Olumsuz", def: "Özne + have/has + not + 3. hâl fiil", examples: ["I have not (haven't) eaten yet.", "He has not (hasn't) called."] },
              { name: "Soru", def: "Have/Has + özne + 3. hâl fiil ?", examples: ["Have you finished?", "Has she arrived?"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Present Perfect ile kesin zaman ifadesi kullanmak (I have seen him yesterday — yanlış, Past Simple gerekir).",
              "Past Simple ile karıştırmak (sonucu şimdiki zamana bağlıysa Present Perfect kullanılmalı).",
              "Düzensiz 3. hâl fiillerini yanlış kullanmak (have went yerine have gone)."
            ],
            moreExamples: [
              "just, already, yet, ever, never, since, for — en sık kullanılan sinyal kelimeler",
              "I have lived here for five years. (hâlâ burada yaşıyor)",
              "Have you ever been to Russia?"
            ],
            tip: "'since' bir başlangıç noktasıyla (since 2020), 'for' bir süreyle (for five years) kullanılır."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “I ___ (never/be) to Russia.”",
          hint: "İpucu: 'be' fiilinin 3. hâli 'been'dir."
        }
      },
      {
        id: "en-articles",
        category: "articles",
        level: "A1",
        term: "ARTICLES",
        pages: [
          {
            quickFacts: [
              "İngilizcede üç artikel vardır: a, an, the.",
              "a / an belirsiz artikeldir, tekil ve sayılabilir isimlerle kullanılır.",
              "the belirli artikeldir, hem tekil hem çoğul isimlerle kullanılır."
            ],
            definition:
              "Artikeller (a, an, the), bir ismin belirli mi yoksa belirsiz mi olduğunu gösteren küçük ama önemli kelimelerdir.",
            typesLabel: "ARTİKEL TÜRLERİ — 3 TİP",
            types: [
              { name: "A", def: "Ünsüz sesle başlayan tekil isimlerden önce kullanılır.", examples: ["a book", "a university (ünsüz 'y' sesi)"] },
              { name: "An", def: "Ünlü sesle başlayan tekil isimlerden önce kullanılır.", examples: ["an apple", "an hour (sessiz 'h')"] },
              { name: "The", def: "Konuşan ve dinleyenin hangi nesneden bahsedildiğini bildiği durumlarda kullanılır.", examples: ["the sun", "the book I told you about"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Genel çoğul isimlerle 'the' kullanmak (I like the dogs yerine I like dogs — genel anlamda).",
              "Yazılışa göre değil söylenişe göre karar vermemek (a hour yerine an hour, a university değil çünkü 'y' sesiyle başlar).",
              "Superlative'lerden önce 'the' unutmak (best student yerine the best student)."
            ],
            moreExamples: [
              "the Sun, the Moon, the Earth — tek olan nesnelerde 'the'",
              "I saw a dog. The dog was brown. — ilk bahsedilişte 'a', ikinci bahsedilişte 'the'",
              "She is the best teacher in the school."
            ],
            tip: "Kural harfe değil, sese bakar: 'a university' (y sesi ünsüz), 'an hour' (h sessiz, ünlü sesiyle başlıyor gibi)."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “She bought ___ umbrella because it started to rain.”",
          hint: "İpucu: 'umbrella' bir ünlü sesiyle başlar."
        }
      },
      {
        id: "en-modals",
        category: "modals",
        level: "B1",
        term: "MODAL VERBS",
        pages: [
          {
            quickFacts: [
              "Kip fiilleri (can, must, should...) izinden zorunluluğa kadar farklı anlamlar taşır.",
              "Sonrasında fiilin yalın hali (infinitive) gelir, -s eklenmez.",
              "Soru ve olumsuz yapılırken do/does kullanılmaz."
            ],
            definition:
              "Modal fiiller; yetenek, izin, olasılık, zorunluluk ya da tavsiye gibi anlamları ifade etmek için ana fiile eklenen yardımcı fiillerdir.",
            typesLabel: "KİP FİİLLERİ — 5 TİP",
            types: [
              { name: "Can / Could", def: "Yetenek ya da izin bildirir.", examples: ["She can swim.", "Could I borrow your pen?"] },
              { name: "Must", def: "Güçlü zorunluluk bildirir.", examples: ["You must wear a seatbelt."] },
              { name: "Should", def: "Tavsiye bildirir.", examples: ["You should see a doctor."] },
              { name: "May / Might", def: "Olasılık ya da resmi izin bildirir.", examples: ["It may rain later.", "May I come in?"] },
              { name: "Will", def: "Gelecek zaman ya da kararlılık bildirir.", examples: ["I will call you tomorrow."] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Modal fiilden sonra 'to' kullanmak (must to go yerine must go — must, can, should 'to' almaz).",
              "Modal fiile -s eklemek (she cans yerine she can).",
              "'must not' ile 'don't have to' anlamlarını karıştırmak."
            ],
            moreExamples: [
              "must not = yasak: You must not smoke here.",
              "don't have to = gerek yok: You don't have to come if you're busy.",
              "have to = dışarıdan gelen zorunluluk: I have to work on Saturday."
            ],
            tip: "'must not' bir şeyin yasak olduğunu, 'don't have to' ise gerekli olmadığını (ama yapılabileceğini) belirtir — ikisi çok farklıdır."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “Students ___ arrive on time for the exam.” (zorunluluk)",
          hint: "İpucu: Güçlü bir zorunluluk bildiren kip fiilini kullan."
        }
      },
      {
        id: "en-passive",
        category: "voice",
        level: "B1",
        term: "PASSIVE VOICE",
        pages: [
          {
            quickFacts: [
              "Edilgen çatıda eylemi yapan değil, eylemden etkilenen öne çıkar.",
              "be + fiilin 3. hâli (past participle) ile kurulur.",
              "Eylemi yapan kişi önemli değilse ya da bilinmiyorsa kullanılır."
            ],
            definition:
              "Edilgen çatı (passive voice), eylemi yapanın değil, eylemden etkilenenin cümlenin öznesi olduğu yapıdır.",
            typesLabel: "ZAMANA GÖRE — 3 ÖRNEK",
            types: [
              { name: "Present Simple Passive", def: "am/is/are + 3. hâl fiil", examples: ["The letter is written by her."] },
              { name: "Past Simple Passive", def: "was/were + 3. hâl fiil", examples: ["The house was built in 1990."] },
              { name: "Present Perfect Passive", def: "have/has been + 3. hâl fiil", examples: ["The work has been completed."] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "'be' fiilinin zamanını unutmak ya da yanlış çekimlemek.",
              "Gereksiz yere 'by' ile eylemi yapanı belirtmek (önemsizse gerek yok).",
              "Her cümleyi edilgen yapmaya çalışmak — İngilizcede etken çatı daha doğaldır."
            ],
            moreExamples: [
              "The cake was eaten by the children. (eylemi yapan önemliyse 'by')",
              "My car was stolen last night. (kim çaldığı bilinmiyor, 'by' yok)",
              "English is spoken all over the world."
            ],
            tip: "Edilgen çatıyı sadece eylemi yapan kişi önemsizse, bilinmiyorsa ya da vurgu nesnede olacaksa kullan."
          }
        ],
        practice: {
          question: "Edilgen çatıya çevir: “They clean the office every day.”",
          hint: "İpucu: 'The office ___ every day.' şeklinde başla."
        }
      },
      {
        id: "en-conditionals",
        category: "conditionals",
        level: "B1",
        term: "CONDITIONALS",
        pages: [
          {
            quickFacts: [
              "Koşul cümleleri 'if' ile kurulur ve bir durumun sonucunu anlatır.",
              "Hangi koşul tipinin kullanılacağı, durumun gerçek/hayali olmasına bağlıdır.",
              "En sık kullanılan üç tip: zero, first ve second conditional."
            ],
            definition:
              "Koşul cümleleri (conditionals), bir eylemin gerçekleşmesinin başka bir eyleme bağlı olduğu durumları anlatır.",
            typesLabel: "KOŞUL TİPLERİ — 3 TİP",
            types: [
              { name: "Zero Conditional", def: "If + present simple, present simple — genel gerçekler.", examples: ["If you heat ice, it melts."] },
              { name: "First Conditional", def: "If + present simple, will + fiil — gerçekleşmesi mümkün durumlar.", examples: ["If it rains, I will stay home."] },
              { name: "Second Conditional", def: "If + past simple, would + fiil — hayali/gerçek dışı durumlar.", examples: ["If I won the lottery, I would travel the world."] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "'if' cümleciğinde 'will' kullanmak (if it will rain yerine if it rains).",
              "Second conditional'da 'if' kısmında 'would' kullanmak (if I would have yerine if I had).",
              "Zero ve first conditional'ı karıştırmak."
            ],
            moreExamples: [
              "Third conditional (ileri seviye): If I had studied, I would have passed. (geçmişte gerçekleşmemiş durum)",
              "If you don't water plants, they die. (zero conditional)",
              "If I were you, I would apologize. (second conditional, 'were' herkes için kullanılır)"
            ],
            tip: "'if' kısmında asla 'will' ya da 'would' kullanılmaz — bu ikisi her zaman sonuç (main clause) kısmında yer alır."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “If I ___ (have) more time, I would learn Russian.”",
          hint: "İpucu: Bu bir second conditional — 'if' kısmında past simple kullanılır."
        }
      },
      {
        id: "en-comparison",
        category: "comparison",
        level: "A2",
        term: "COMPARATIVES & SUPERLATIVES",
        pages: [
          {
            quickFacts: [
              "Kısa sıfatlara -er / -est eklenir.",
              "Uzun sıfatlarda more / most kullanılır.",
              "Bazı sıfatlar düzensizdir (good → better → best)."
            ],
            definition:
              "Karşılaştırma sıfatları, iki ya da daha fazla şeyi kıyaslamak için kullanılır: comparative iki şeyi, superlative bir grubun en üstününü belirtir.",
            typesLabel: "YAPI — 3 TİP",
            types: [
              { name: "Comparative (kısa sıfat)", def: "sıfat + er + than", examples: ["This book is cheaper than that one."] },
              { name: "Comparative (uzun sıfat)", def: "more + sıfat + than", examples: ["This film is more interesting than the last one."] },
              { name: "Superlative", def: "the + sıfat-est / the most + sıfat", examples: ["She is the tallest in her class.", "It's the most expensive hotel in town."] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Çifte karşılaştırma yapmak (more better yerine sadece better).",
              "Superlative'den önce 'the' unutmak.",
              "Düzensiz sıfatlara -er/-est eklemek (gooder yerine better)."
            ],
            moreExamples: [
              "good → better → best, bad → worse → worst, far → further → furthest",
              "as...as yapısı eşitlik için: This is as good as that.",
              "Russian grammar is more complex than I expected."
            ],
            tip: "good, bad, far gibi kısa ama düzensiz sıfatların özel biçimlerini ezberlemek gerekir, kurala uymazlar."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “Russian grammar is ___ (difficult) than English grammar.”",
          hint: "İpucu: 'difficult' uzun bir sıfattır, 'more' ile kullanılır."
        }
      },
      {
        id: "en-pronouns",
        category: "pronouns",
        level: "A1",
        term: "PERSONAL & POSSESSIVE PRONOUNS",
        pages: [
          {
            quickFacts: [
              "Kişi zamirleri (I, you, he...) özneyi belirtir.",
              "İyelik zamirleri (mine, yours...) sahiplik belirtir.",
              "İyelik sıfatları (my, your...) her zaman bir isimle birlikte kullanılır."
            ],
            definition:
              "Zamirler, isimlerin yerini tutan kelimelerdir; kişi zamirleri özneyi, iyelik zamirleri ise sahipliği belirtir.",
            typesLabel: "ZAMİR TÜRLERİ — 3 TİP",
            types: [
              { name: "Kişi Zamirleri (Subject)", def: "I, you, he, she, it, we, they", examples: ["She is a teacher.", "They live in Moscow."] },
              { name: "İyelik Sıfatları (Possessive Adjectives)", def: "my, your, his, her, its, our, their — bir isimle birlikte kullanılır.", examples: ["This is my book.", "Their house is big."] },
              { name: "İyelik Zamirleri (Possessive Pronouns)", def: "mine, yours, his, hers, its, ours, theirs — tek başına kullanılır.", examples: ["This book is mine.", "The red car is hers."] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "'its' (iyelik) ile 'it's' (it is kısaltması) karıştırmak.",
              "İyelik sıfatını isim olmadan kullanmak (this is my yerine this is mine).",
              "Dönüşlü zamirleri (myself, yourself) yanlış kullanmak."
            ],
            moreExamples: [
              "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves — dönüşlü zamirler",
              "The dog wagged its tail. (iyelik, kesme işaretsiz)",
              "It's raining. (it is kısaltması, kesme işaretli)"
            ],
            tip: "'it's' her zaman 'it is' ya da 'it has' kısaltmasıdır; iyelik anlamı için kesme işaretsiz 'its' kullanılır."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “This is not your pen, it's ___.” (benim)",
          hint: "İpucu: Burada bir iyelik zamiri gerekir, iyelik sıfatı değil."
        }
      },
      {
        id: "en-prepositions",
        category: "prepositions",
        level: "A2",
        term: "PREPOSITIONS OF PLACE & TIME",
        pages: [
          {
            quickFacts: [
              "Edatlar (prepositions), isimlerin yer ve zaman ilişkisini gösterir.",
              "in, on, at en sık kullanılan üç yer/zaman edatıdır.",
              "Kullanım genelde ezbere öğrenilir, sabit kalıplar vardır."
            ],
            definition:
              "Edatlar, bir ismin başka bir kelimeyle olan yer, zaman ya da yön ilişkisini gösteren küçük ama önemli kelimelerdir.",
            typesLabel: "TEMEL ÜÇLÜ — 3 TİP",
            types: [
              { name: "In", def: "Aylar, yıllar, şehirler, ülkeler ve kapalı alanlar için.", examples: ["in July", "in 2020", "in London", "in the room"] },
              { name: "On", def: "Günler, tarihler ve yüzeyler için.", examples: ["on Monday", "on May 5th", "on the table"] },
              { name: "At", def: "Saatler ve nokta belirten yerler için.", examples: ["at 6 o'clock", "at the door", "at home"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "'arrive to' demek (doğrusu: arrive at/in — arrive hiçbir zaman 'to' almaz).",
              "'in the weekend' demek (doğrusu: on the weekend / at the weekend).",
              "'in time' ile 'on time' anlamlarını karıştırmak."
            ],
            moreExamples: [
              "arrive at the airport, arrive in London — arrive + at/in, asla arrive to değil",
              "on time = tam zamanında, in time = yetişecek kadar erken",
              "at night ama in the morning/afternoon/evening"
            ],
            tip: "Edat kullanımı genelde mantıktan çok alışkanlıktır — her yeni kalıbı örnek cümleyle birlikte ezberlemek en etkili yoldur."
          }
        ],
        practice: {
          question: "Boşluğu doldur: “The meeting is ___ Monday ___ 9 o'clock.”",
          hint: "İpucu: Gün için bir edat, saat için başka bir edat gerekir."
        }
      }
    ]
  },

  ru: {
    label: "Rusça",
    native: "Русский",
    accent: "crimson",
    categories: [
      { id: "cases", label: "Hâller (Падежи)", mark: "П" },
      { id: "aspect", label: "Fiil Görünüşü", mark: "В" },
      { id: "gender", label: "Cinsiyet", mark: "Р" },
      { id: "motion", label: "Hareket Fiilleri", mark: "Д" },
      { id: "adjectives", label: "Sıfatlar", mark: "К" },
      { id: "pronouns", label: "Zamirler", mark: "М" },
      { id: "numbers", label: "Sayılar", mark: "Ч" },
      { id: "imperative", label: "Emir Kipi", mark: "И" },
      { id: "comparison", label: "Karşılaştırma", mark: "С" }
    ],
    lessons: [
      {
        id: "ru-cases",
        category: "cases",
        level: "A2",
        term: "ПАДЕЖИ",
        pages: [
          {
            quickFacts: [
              "Rusçada isimler cümledeki göreve göre çekimlenir.",
              "6 hâl (padej) vardır.",
              "Her hâlin kendi sorusu vardır — hangi hâlin kullanılacağını bu soru belirler."
            ],
            definition:
              "Hâller (padejler), bir ismin cümle içindeki görevini (özne, nesne, aitlik, yön vb.) gösteren çekim biçimleridir.",
            typesLabel: "HÂLLER — 6 TİP",
            types: [
              { name: "Именительный (Yalın Hâl)", def: "Kim? Ne? — cümlenin öznesi.", examples: ["Это книга. (Bu bir kitap.)"] },
              { name: "Родительный (Belirtme/Aitlik)", def: "Kimin? Neyin? — sahiplik ve yokluk bildirir.", examples: ["У меня нет книги. (Kitabım yok.)"] },
              { name: "Дательный (Yönelme Hâli)", def: "Kime? Neye? — bir şeyin verildiği kişi.", examples: ["Я дал книгу другу. (Kitabı arkadaşıma verdim.)"] },
              { name: "Винительный (-i Hâli)", def: "Kimi? Neyi? — doğrudan nesne.", examples: ["Я читаю книгу. (Kitabı okuyorum.)"] },
              { name: "Творительный (Araç Hâli)", def: "Kiminle? Ne ile? — araç ya da birliktelik.", examples: ["Я пишу ручкой. (Kalemle yazıyorum.)"] },
              { name: "Предложный (Yer/Konu Hâli)", def: "Kimde? Nerede? Ne hakkında?", examples: ["Книга на столе. (Kitap masanın üzerinde.)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Edattan sonra yanlış hâli kullanmak (her edatın gerektirdiği hâl farklıdır).",
              "Canlı/cansız isimlerde винительный hâlini karıştırmak (canlılarda родительный ile aynı biçim alır).",
              "Sıfatı isimle aynı hâlde çekimlemeyi unutmak."
            ],
            moreExamples: [
              "в (içinde) + предложный: в доме (evde)",
              "с (ile) + творительный: с другом (arkadaşla)",
              "для (için) + родительный: для тебя (senin için)"
            ],
            tip: "Her edatın sabit bir hâl gerektirdiğini unutma — bir edat-hâl tablosu yapıp ezberlemek çok işine yarar."
          }
        ],
        practice: {
          question: "Doğru hâli seç: “Я говорю о ___ (книга).”",
          hint: "İpucu: 'hakkında' anlamı hangi hâli gerektirir?"
        }
      },
      {
        id: "ru-aspect",
        category: "aspect",
        level: "B1",
        term: "ВИД ГЛАГОЛА",
        pages: [
          {
            quickFacts: [
              "Rusçada her fiilin iki görünüşü (vidi) vardır: tamamlanmamış ve tamamlanmış.",
              "Tamamlanmamış görünüş süreci, tamamlanmış görünüş sonucu vurgular.",
              "Genelde tamamlanmış fiil bir önek alarak türetilir."
            ],
            definition:
              "Fiil görünüşü (вид), bir eylemin tamamlanıp tamamlanmadığını ya da devam edip etmediğini gösteren temel bir Rusça dilbilgisi kategorisidir.",
            typesLabel: "GÖRÜNÜŞ — 2 TİP",
            types: [
              { name: "Несовершенный вид (Tamamlanmamış)", def: "Süreci, tekrarı ya da alışkanlığı vurgular.", examples: ["Я писал письмо. (Mektup yazıyordum — süreç.)"] },
              { name: "Совершенный вид (Tamamlanmış)", def: "Sonucu ya da tek seferlik tamamlanmış eylemi vurgular.", examples: ["Я написал письмо. (Mektubu yazdım — bitti.)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Devam eden bir eylem için tamamlanmış fiil kullanmak.",
              "Gelecek zamanı yanlış kurmak — iki görünüşün gelecek zaman yapısı farklıdır.",
              "Emir kipinde yanlış görünüş seçmek."
            ],
            moreExamples: [
              "Tamamlanmamış gelecek: буду + infinitive → я буду читать (okuyacağım — süreç)",
              "Tamamlanmış gelecek: sadece çekim → я прочитаю (okuyup bitireceğim)",
              "Каждый день я читаю газету. (alışkanlık, tamamlanmamış)"
            ],
            tip: "Kendine sor: 'Süreç mi anlatıyorum, yoksa sonucu mu?' Süreçse tamamlanmamış, sonuçsa tamamlanmış görünüş kullan."
          }
        ],
        practice: {
          question: "Hangisi doğru? “Вчера я весь день ___ (писать / написать) письмо.”",
          hint: "İpucu: 'Bütün gün' bir süreci mi, yoksa tek seferlik bir sonucu mu anlatır?"
        }
      },
      {
        id: "ru-gender",
        category: "gender",
        level: "A1",
        term: "РОД СУЩЕСТВИТЕЛЬНЫХ",
        pages: [
          {
            quickFacts: [
              "Rusçada her isim üç cinsiyetten birine aittir.",
              "Cinsiyet genelde ismin son harfinden anlaşılır.",
              "Sıfatlar ve geçmiş zaman fiilleri isme göre cinsiyet alır."
            ],
            definition:
              "İsim cinsiyeti (род), bir ismin eril, dişil ya da nötr olarak sınıflandırılmasıdır; bu sınıflandırma sıfat ve fiil çekimlerini de etkiler.",
            typesLabel: "CİNSİYETLER — 3 TİP",
            types: [
              { name: "Мужской род (Eril)", def: "Genelde ünsüz harfle biter.", examples: ["стол (masa)", "дом (ev)", "город (şehir)"] },
              { name: "Женский род (Dişil)", def: "Genelde -а / -я ile biter.", examples: ["книга (kitap)", "земля (toprak)"] },
              { name: "Средний род (Nötr)", def: "Genelde -о / -е ile biter.", examples: ["окно (pencere)", "море (deniz)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "-ь ile biten isimlerin cinsiyetini tahmin etmeye çalışmak — bunlar hem eril hem dişil olabilir, ezberlenmeli.",
              "Yabancı kökenli -о ile biten isimleri nötr sanmak (кофе aslında eril kabul edilir, konuşma dilinde nötr de kullanılır).",
              "Geçmiş zaman fiilini isim cinsiyetine göre çekimlemeyi unutmak."
            ],
            moreExamples: [
              "дверь (dişil, -ь ile biter — kapı)",
              "автомобиль (eril, -ь ile biter — otomobil)",
              "Книга лежала на столе. (dişil özneye göre geçmiş zaman: лежала)"
            ],
            tip: "-ь ile biten isimlerin cinsiyeti tahmin edilemez; her birini örnekleriyle birlikte ezberlemek gerekir."
          }
        ],
        practice: {
          question: "Bu ismin cinsiyeti nedir? “письмо” (mektup)",
          hint: "İpucu: Sonundaki harfe bak."
        }
      },
      {
        id: "ru-motion",
        category: "motion",
        level: "B1",
        term: "ГЛАГОЛЫ ДВИЖЕНИЯ",
        pages: [
          {
            quickFacts: [
              "Rusçada 'gitmek' için tek bir fiil yoktur.",
              "Yürüyerek mi yoksa taşıtla mı gidildiği fiili değiştirir.",
              "Tek yönlü ve çok yönlü hareket ayrı fiillerle anlatılır."
            ],
            definition:
              "Hareket fiilleri (глаголы движения), gidiş biçimine (yürüyerek/taşıtla) ve yönün tek mi çok yönlü mü olduğuna göre değişen özel bir Rusça fiil grubudur.",
            typesLabel: "TEMEL ÇİFTLER — 2 TİP",
            types: [
              { name: "Идти / Ходить", def: "Yürüyerek gitmek — идти tek yönlü, ходить çok yönlü/alışkanlık.", examples: ["Я иду в школу. (Şu an okula yürüyorum.)", "Я хожу в школу каждый день. (Her gün okula yürürüm.)"] },
              { name: "Ехать / Ездить", def: "Taşıtla gitmek — ехать tek yönlü, ездить çok yönlü/alışkanlık.", examples: ["Я еду в Москву. (Şu an Moskova'ya gidiyorum.)", "Я езжу на работу на автобусе. (İşe otobüsle giderim.)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Alışkanlık anlatırken tek yönlü fiil kullanmak (идти yerine ходить gerekir).",
              "Önekli hareket fiillerinin anlamını karıştırmak (при- gelmek, у- gitmek/ayrılmak).",
              "идти/ехать seçiminde ulaşım aracını göz ardı etmek."
            ],
            moreExamples: [
              "прийти (gelmek, yürüyerek varmak), приехать (gelmek, taşıtla varmak)",
              "уйти (ayrılmak, yürüyerek), уехать (ayrılmak, taşıtla)",
              "полететь (uçarak gitmek) — önek eylemi tek seferlik/tamamlanmış yapar"
            ],
            tip: "Önekler (при-, у-, по-) temel hareket fiiline yön ve tamamlanmışlık anlamı katar — her önek ayrı ayrı öğrenilmeli."
          }
        ],
        practice: {
          question: "Doğru fiili seç: “Каждое утро я ___ (идти / ходить) в парк.”",
          hint: "İpucu: 'Her sabah' bir alışkanlık bildirir."
        }
      },
      {
        id: "ru-adjectives",
        category: "adjectives",
        level: "A2",
        term: "ПРИЛАГАТЕЛЬНЫЕ",
        pages: [
          {
            quickFacts: [
              "Sıfatlar, tanımladıkları isimle cinsiyet, sayı ve hâl bakımından uyumlu olmalıdır.",
              "Sözlük hâli her zaman eril, tekil, yalın hâldir.",
              "Sıfatın sonu, isme göre değişir."
            ],
            definition:
              "Rusçada sıfatlar (прилагательные), tanımladıkları ismin cinsiyetine, sayısına ve hâline göre çekimlenir — Türkçedeki gibi değişmez kalmazlar.",
            typesLabel: "TEKİL ÇEKİM — 3 TİP",
            types: [
              { name: "Мужской род (Eril)", def: "Genelde -ый / -ий ile biter.", examples: ["новый дом (yeni ev)"] },
              { name: "Женский род (Dişil)", def: "Genelde -ая / -яя ile biter.", examples: ["новая книга (yeni kitap)"] },
              { name: "Средний род (Nötr)", def: "Genelde -ое / -ее ile biter.", examples: ["новое окно (yeni pencere)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Sert ve yumuşak sıfat çekimlerini karıştırmak (новый tipi vs синий tipi).",
              "Kısa biçim (predikatif) ile uzun biçimi karıştırmak.",
              "Çoğul çekimde cinsiyet ayrımı yapmaya çalışmak — çoğulda cinsiyet ayrımı yoktur."
            ],
            moreExamples: [
              "синий (yumuşak sıfat çekimi — mavi)",
              "Kısa biçim: он рад (o mutlu), она должна (o -dişil- zorunda)",
              "новые дома, новые книги — çoğulda tek biçim, cinsiyet ayrımı yok"
            ],
            tip: "Kısa biçim sıfatlar sadece yüklem olarak kullanılır (он готов), isimden önce asla gelmez."
          }
        ],
        practice: {
          question: "Doğru ekle: “красив___ девушка” (güzel kız)",
          hint: "İpucu: 'девушка' dişil bir isimdir."
        }
      },
      {
        id: "ru-pronouns",
        category: "pronouns",
        level: "A1",
        term: "ЛИЧНЫЕ МЕСТОИМЕНИЯ",
        pages: [
          {
            quickFacts: [
              "Rusçada 6 kişi zamiri vardır.",
              "Zamirler de isimler gibi hâllere göre çekimlenir.",
              "Yalın hâldeki zamirler cümlenin öznesidir."
            ],
            definition:
              "Şahıs zamirleri (личные местоимения), kişileri temsil eden ve cümledeki göreve göre çekimlenen kelimelerdir.",
            typesLabel: "YALIN HÂL — 6 ZAMİR",
            types: [
              { name: "Tekil", def: "я (ben), ты (sen), он/она/оно (o)", examples: ["Я студент. (Ben öğrenciyim.)", "Она врач. (O doktor.)"] },
              { name: "Çoğul", def: "мы (biz), вы (siz), они (onlar)", examples: ["Мы дома. (Biz evdeyiz.)", "Они друзья. (Onlar arkadaş.)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Zamirleri hâllere göre çekimlemeyi unutmak (я → меня/мне/мной gibi).",
              "İyelik için 'его/её/их' kelimelerini yanlışlıkla çekimlemeye çalışmak — bunlar değişmez.",
              "Dönüşlü zamir 'себя'yı kişiye göre çekimlemeye çalışmak — o da değişmez."
            ],
            moreExamples: [
              "я → меня (родительный), мне (дательный), мной (творительный)",
              "его дом, её книга, их машина — iyelik hâlinde değişmezler",
              "Он любит себя. (dönüşlü zamir, herkes için aynı: себя)"
            ],
            tip: "его, её, их iyelik anlamında kullanıldığında asla çekimlenmez, sabit kalır."
          }
        ],
        practice: {
          question: "Doğru zamiri seç: “___ читаю книгу.” (Ben kitap okuyorum.)",
          hint: "İpucu: 'Ben' anlamına gelen zamiri düşün."
        }
      },
      {
        id: "ru-numbers",
        category: "numbers",
        level: "A2",
        term: "ЧИСЛИТЕЛЬНЫЕ",
        pages: [
          {
            quickFacts: [
              "Sayılar, yanlarındaki ismin hâlini ve hatta biçimini değiştirir.",
              "1 sayısı isimle cinsiyet uyumu gösterir.",
              "2-4 ve 5+ sayılarından sonra ismin biçimi farklıdır."
            ],
            definition:
              "Rusçada sayılar (числительные), kendilerinden sonra gelen ismin hâlini belirleyen özel bir kelime grubudur.",
            typesLabel: "İSİMLE UYUM — 3 GRUP",
            types: [
              { name: "1 (один/одна/одно)", def: "İsimle aynı cinsiyette olur, isim yalın hâlde kalır.", examples: ["один стол (bir masa)", "одна книга (bir kitap)"] },
              { name: "2, 3, 4", def: "İsim родительный (belirtme) hâlinin tekilinde olur.", examples: ["два стола (iki masa)", "три книги (üç kitap)"] },
              { name: "5 ve üzeri", def: "İsim родительный (belirtme) hâlinin çoğulunda olur.", examples: ["пять столов (beş masa)", "пять книг (beş kitap)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Bileşik sayılarda kuralı tüm sayıya uygulamak (yalnızca son basamak önemlidir).",
              "Sayının kendisini çekimlemeyi unutmak — sayılar da hâllere göre değişir.",
              "'два/две' cinsiyet uyumunu unutmak (два стола ama две книги)."
            ],
            moreExamples: [
              "двадцать один стол (21 masa — sadece son basamak '1' kuralı belirler, isim yalın hâlde kalır)",
              "два студента, две студентки — два eril/nötr, две dişil isimlerle",
              "с пятью друзьями (beş arkadaşla — творительный hâlde sayı da çekimlenir)"
            ],
            tip: "Bileşik bir sayıda (21, 32, 105 gibi) sadece en sondaki basamak, isim uyumunu belirler."
          }
        ],
        practice: {
          question: "Doğru biçimi seç: “четыре ___ (стол/стола/столов)” (dört masa)",
          hint: "İpucu: 2, 3, 4 sayılarından sonra isim hangi biçimde olur?"
        }
      },
      {
        id: "ru-imperative",
        category: "imperative",
        level: "A2",
        term: "ПОВЕЛИТЕЛЬНОЕ НАКЛОНЕНИЕ",
        pages: [
          {
            quickFacts: [
              "Emir kipi, bir isteği ya da komutu ifade eder.",
              "Tekil (sen) ve çoğul/resmi (siz) olmak üzere iki biçimi vardır.",
              "Fiil kökü + -и / -й / -ь gibi eklerle kurulur."
            ],
            definition:
              "Emir kipi (повелительное наклонение), birine bir şey yapmasını söylemek ya da rica etmek için kullanılan fiil biçimidir.",
            typesLabel: "İKİ BİÇİM — 2 TİP",
            types: [
              { name: "Tekil (sen)", def: "Fiil kökü + -и / -й / -ь", examples: ["Читай! (Oku!)", "Смотри! (Bak!)"] },
              { name: "Çoğul / Resmi (siz)", def: "Tekil biçim + -те", examples: ["Читайте! (Okuyun!)", "Смотрите! (Bakın!)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Olumsuz emirde yanlış görünüş (vid) kullanmak — olumsuz emir genelde tamamlanmamış görünüşle kurulur.",
              "Resmi/çoğul biçimde -те eki eklemeyi unutmak.",
              "Emir yerine mastar (infinitive) kullanmak — bu kaba/sert bir emir gibi algılanır."
            ],
            moreExamples: [
              "Не забудь! (Unutma! — olumsuz emir, tamamlanmamış görünüş)",
              "Помогите мне, пожалуйста! (Bana yardım edin lütfen! — resmi/çoğul)",
              "Давай! (Hadi! — teklif/öneri anlamında yaygın kullanım)"
            ],
            tip: "Kibar bir rica için sona 'пожалуйста' (lütfen) eklemek, emri daha yumuşak hâle getirir."
          }
        ],
        practice: {
          question: "'Yaz!' kelimesini resmi biçimde söyle: “Пиши” → ___",
          hint: "İpucu: Sonuna -те ekle."
        }
      },
      {
        id: "ru-comparison",
        category: "comparison",
        level: "B1",
        term: "СРАВНЕНИЕ",
        pages: [
          {
            quickFacts: [
              "Karşılaştırma sıfatları genelde -ее / -ей eki alır.",
              "Bazı sıfatlar düzensizdir (хороший → лучше).",
              "En üstünlük derecesi самый + sıfat ile kurulur."
            ],
            definition:
              "Karşılaştırma (сравнение), iki ya da daha fazla şeyi kıyaslamak için kullanılan sıfat biçimleridir.",
            typesLabel: "YAPI — 2 TİP",
            types: [
              { name: "Karşılaştırma Derecesi", def: "sıfat kökü + -ее / -ей, ya da düzensiz biçim.", examples: ["быстрее (daha hızlı)", "лучше (daha iyi — хороший'den)"] },
              { name: "En Üstünlük Derecesi", def: "самый + sıfat", examples: ["самый быстрый (en hızlı)", "самый лучший (en iyi)"] }
            ]
          },
          {
            heading: "DAHA FAZLA — SIK HATALAR & İPUÇLARI",
            commonMistakes: [
              "Düzensiz karşılaştırma biçimlerini kurala göre türetmeye çalışmak (хорошее yerine лучше olmalı).",
              "Karşılaştırma yaparken 'чем' (than) kelimesini unutmak.",
              "самый ile düzensiz biçimi birlikte kullanmayı unutmak (самый лучший doğru, sadece лучший değil)."
            ],
            moreExamples: [
              "плохой → хуже (daha kötü), большой → больше (daha büyük), маленький → меньше (daha küçük)",
              "Она бегает быстрее, чем я. (O benden daha hızlı koşuyor.)",
              "самый интересный фильм (en ilginç film)"
            ],
            tip: "'чем' kelimesi Türkçedeki '-den/-dan daha' yapısındaki 'den/dan' gibi düşünülebilir — karşılaştırmanın ikinci tarafını bağlar."
          }
        ],
        practice: {
          question: "'İyi' sıfatının karşılaştırma hâli nedir? “хороший” → ___",
          hint: "İpucu: Bu sıfat düzensizdir, ezbere öğrenilir."
        }
      }
    ]
  }
};

if (typeof module !== "undefined") {
  module.exports = GRAMMAR_DATA;
}

