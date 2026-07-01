/* Ineffable — grammar data
   Each lesson follows a "notebook" structure:
   term        -> the boxed headline word/phrase
   quickFacts  -> short bullet rules (top of the page)
   definition  -> one/two sentence Turkish definition, underlined in UI
   types       -> numbered sub-list with arrow markers (like "5 TYPES")
   practice    -> a boxed "find it" style question at the end
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
          {
            name: "Özel İsim (Proper Noun)",
            def: "Belirli bir kişi, yer ya da nesnenin özel adıdır.",
            examples: ["Ram", "Delhi", "Mohan", "Sudha", "Kolkata"]
          },
          {
            name: "Cins İsim (Common Noun)",
            def: "Aynı sınıftaki her kişi, yer ya da nesneye verilen genel addır.",
            examples: ["boy", "girl", "city", "river", "table"]
          },
          {
            name: "Soyut İsim (Abstract Noun)",
            def: "Bir niteliğin, durumun ya da fikrin adıdır.",
            examples: ["kindness", "childhood", "honesty", "wisdom", "happiness"]
          },
          {
            name: "Topluluk İsmi (Collective Noun)",
            def: "Tek bir birim sayılan bir grup insan ya da nesnenin adıdır.",
            examples: ["class", "crowd", "team", "army", "bouquet"]
          },
          {
            name: "Madde İsmi (Material Noun)",
            def: "Nesnelerin yapıldığı bir madde ya da malzemenin adıdır.",
            examples: ["sugar", "oil", "wood", "gold", "silver", "water"]
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
        quickFacts: [
          "Alışkanlıkları ve rutinleri anlatır.",
          "Genel doğruları ve gerçekleri anlatır.",
          "He / She / It ile fiile -s / -es eklenir."
        ],
        definition:
          "Present Simple, düzenli olarak tekrarlanan eylemleri, alışkanlıkları ve değişmeyen gerçekleri anlatmak için kullanılır.",
        typesLabel: "YAPI — 3 DURUM",
        types: [
          {
            name: "Olumlu",
            def: "Özne + fiil (+ s/es)",
            examples: ["She works every day.", "The sun rises in the east."]
          },
          {
            name: "Olumsuz",
            def: "Özne + do/does not + fiil",
            examples: ["I do not (don't) like coffee.", "He does not (doesn't) play chess."]
          },
          {
            name: "Soru",
            def: "Do/Does + özne + fiil ?",
            examples: ["Do you speak English?", "Does she live here?"]
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
        quickFacts: [
          "Şu an olan bir eylemi anlatır.",
          "Geçici durumları anlatır.",
          "am/is/are + fiil-ing kalıbıyla kurulur."
        ],
        definition:
          "Present Continuous, konuşma anında devam eden ya da geçici olan eylemleri anlatmak için kullanılır.",
        typesLabel: "YAPI — 3 DURUM",
        types: [
          {
            name: "Olumlu",
            def: "Özne + am/is/are + fiil-ing",
            examples: ["I am reading a book.", "They are waiting outside."]
          },
          {
            name: "Olumsuz",
            def: "Özne + am/is/are + not + fiil-ing",
            examples: ["She is not (isn't) listening.", "We are not (aren't) leaving yet."]
          },
          {
            name: "Soru",
            def: "Am/Is/Are + özne + fiil-ing ?",
            examples: ["Is he sleeping?", "Are you coming with us?"]
          }
        ],
        practice: {
          question: "Boşluğu doldur: “Look! It ___ (rain) outside.”",
          hint: "İpucu: Şu anda olan bir eylem."
        }
      },
      {
        id: "en-articles",
        category: "articles",
        level: "A1",
        term: "ARTICLES",
        quickFacts: [
          "İngilizcede üç artikel vardır: a, an, the.",
          "a / an belirsiz artikeldir, tekil ve sayılabilir isimlerle kullanılır.",
          "the belirli artikeldir, hem tekil hem çoğul isimlerle kullanılır."
        ],
        definition:
          "Artikeller (a, an, the), bir ismin belirli mi yoksa belirsiz mi olduğunu gösteren küçük ama önemli kelimelerdir.",
        typesLabel: "ARTİKEL TÜRLERİ — 3 TİP",
        types: [
          {
            name: "A",
            def: "Ünsüz sesle başlayan tekil isimlerden önce kullanılır.",
            examples: ["a book", "a university (ünsüz 'y' sesi)"]
          },
          {
            name: "An",
            def: "Ünlü sesle başlayan tekil isimlerden önce kullanılır.",
            examples: ["an apple", "an hour (sessiz 'h')"]
          },
          {
            name: "The",
            def: "Konuşan ve dinleyenin hangi nesneden bahsedildiğini bildiği durumlarda kullanılır.",
            examples: ["the sun", "the book I told you about"]
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
        quickFacts: [
          "Kip fiilleri (can, must, should...) izinden zorunluluğa kadar farklı anlamlar taşır.",
          "Sonrasında fiilin yalın hali (infinitive) gelir, -s eklenmez.",
          "Soru ve olumsuz yapılırken do/does kullanılmaz."
        ],
        definition:
          "Modal fiiller; yetenek, izin, olasılık, zorunluluk ya da tavsiye gibi anlamları ifade etmek için ana fiile eklenen yardımcı fiillerdir.",
        typesLabel: "KİP FİİLLERİ — 5 TİP",
        types: [
          {
            name: "Can / Could",
            def: "Yetenek ya da izin bildirir.",
            examples: ["She can swim.", "Could I borrow your pen?"]
          },
          {
            name: "Must",
            def: "Güçlü zorunluluk bildirir.",
            examples: ["You must wear a seatbelt."]
          },
          {
            name: "Should",
            def: "Tavsiye bildirir.",
            examples: ["You should see a doctor."]
          },
          {
            name: "May / Might",
            def: "Olasılık ya da resmi izin bildirir.",
            examples: ["It may rain later.", "May I come in?"]
          },
          {
            name: "Will",
            def: "Gelecek zaman ya da kararlılık bildirir.",
            examples: ["I will call you tomorrow."]
          }
        ],
        practice: {
          question: "Boşluğu doldur: “Students ___ arrive on time for the exam.” (zorunluluk)",
          hint: "İpucu: Güçlü bir zorunluluk bildiren kip fiilini kullan."
        }
      },
      {
        id: "en-past-simple",
        category: "tenses",
        level: "A2",
        term: "PAST SIMPLE",
        quickFacts: [
          "Geçmişte tamamlanmış eylemleri anlatır.",
          "Düzenli fiillere -ed eklenir.",
          "Düzensiz fiillerin ikinci hâli ezbere öğrenilir (go → went)."
        ],
        definition:
          "Past Simple, geçmişte belirli bir zamanda başlayıp biten eylemleri anlatmak için kullanılır.",
        typesLabel: "YAPI — 3 DURUM",
        types: [
          {
            name: "Olumlu",
            def: "Özne + fiil-ed (ya da düzensiz 2. hâl)",
            examples: ["She worked yesterday.", "They went to Paris."]
          },
          {
            name: "Olumsuz",
            def: "Özne + did not + fiil (yalın hâl)",
            examples: ["I did not (didn't) see him.", "We did not (didn't) go out."]
          },
          {
            name: "Soru",
            def: "Did + özne + fiil (yalın hâl) ?",
            examples: ["Did you call her?", "Did they arrive on time?"]
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
        quickFacts: [
          "İki temel gelecek zaman yapısı vardır: will ve going to.",
          "Will, o an alınan kararları ve tahminleri anlatır.",
          "Going to, önceden planlanmış niyetleri anlatır."
        ],
        definition:
          "Gelecek zaman, konuşma anında verilen kararlar için 'will', önceden yapılmış planlar için 'be going to' ile kurulur.",
        typesLabel: "İKİ YAPI — 2 TİP",
        types: [
          {
            name: "Will",
            def: "Özne + will + fiil (yalın hâl) — anlık karar, tahmin, söz.",
            examples: ["I think it will rain.", "I'll help you with that."]
          },
          {
            name: "Be going to",
            def: "Özne + am/is/are + going to + fiil — önceden yapılmış plan.",
            examples: ["We are going to visit Rome in July.", "She is going to start a new job."]
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
        quickFacts: [
          "Geçmişte olan ama şimdiki zamanla bağlantılı eylemleri anlatır.",
          "have/has + fiilin 3. hâli (past participle) ile kurulur.",
          "Kesin bir zaman belirtilmez (yesterday, last year gibi ifadeler kullanılmaz)."
        ],
        definition:
          "Present Perfect, geçmişte gerçekleşmiş ama sonucu ya da etkisi şimdiki zamanda hissedilen eylemleri anlatmak için kullanılır.",
        typesLabel: "YAPI — 3 DURUM",
        types: [
          {
            name: "Olumlu",
            def: "Özne + have/has + 3. hâl fiil",
            examples: ["I have finished my homework.", "She has visited Japan."]
          },
          {
            name: "Olumsuz",
            def: "Özne + have/has + not + 3. hâl fiil",
            examples: ["I have not (haven't) eaten yet.", "He has not (hasn't) called."]
          },
          {
            name: "Soru",
            def: "Have/Has + özne + 3. hâl fiil ?",
            examples: ["Have you finished?", "Has she arrived?"]
          }
        ],
        practice: {
          question: "Boşluğu doldur: “I ___ (never/be) to Russia.”",
          hint: "İpucu: 'be' fiilinin 3. hâli 'been'dir."
        }
      },
      {
        id: "en-passive",
        category: "voice",
        level: "B1",
        term: "PASSIVE VOICE",
        quickFacts: [
          "Edilgen çatıda eylemi yapan değil, eylemden etkilenen öne çıkar.",
          "be + fiilin 3. hâli (past participle) ile kurulur.",
          "Eylemi yapan kişi önemli değilse ya da bilinmiyorsa kullanılır."
        ],
        definition:
          "Edilgen çatı (passive voice), eylemi yapanın değil, eylemden etkilenenin cümlenin öznesi olduğu yapıdır.",
        typesLabel: "ZAMANA GÖRE — 3 ÖRNEK",
        types: [
          {
            name: "Present Simple Passive",
            def: "am/is/are + 3. hâl fiil",
            examples: ["The letter is written by her."]
          },
          {
            name: "Past Simple Passive",
            def: "was/were + 3. hâl fiil",
            examples: ["The house was built in 1990."]
          },
          {
            name: "Present Perfect Passive",
            def: "have/has been + 3. hâl fiil",
            examples: ["The work has been completed."]
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
        quickFacts: [
          "Koşul cümleleri 'if' ile kurulur ve bir durumun sonucunu anlatır.",
          "Hangi koşul tipinin kullanılacağı, durumun gerçek/hayali olmasına bağlıdır.",
          "En sık kullanılan üç tip: zero, first ve second conditional."
        ],
        definition:
          "Koşul cümleleri (conditionals), bir eylemin gerçekleşmesinin başka bir eyleme bağlı olduğu durumları anlatır.",
        typesLabel: "KOŞUL TİPLERİ — 3 TİP",
        types: [
          {
            name: "Zero Conditional",
            def: "If + present simple, present simple — genel gerçekler.",
            examples: ["If you heat ice, it melts."]
          },
          {
            name: "First Conditional",
            def: "If + present simple, will + fiil — gerçekleşmesi mümkün durumlar.",
            examples: ["If it rains, I will stay home."]
          },
          {
            name: "Second Conditional",
            def: "If + past simple, would + fiil — hayali/gerçek dışı durumlar.",
            examples: ["If I won the lottery, I would travel the world."]
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
        quickFacts: [
          "Kısa sıfatlara -er / -est eklenir.",
          "Uzun sıfatlarda more / most kullanılır.",
          "Bazı sıfatlar düzensizdir (good → better → best)."
        ],
        definition:
          "Karşılaştırma sıfatları, iki ya da daha fazla şeyi kıyaslamak için kullanılır: comparative iki şeyi, superlative bir grubun en üstününü belirtir.",
        typesLabel: "YAPI — 3 TİP",
        types: [
          {
            name: "Comparative (kısa sıfat)",
            def: "sıfat + er + than",
            examples: ["This book is cheaper than that one."]
          },
          {
            name: "Comparative (uzun sıfat)",
            def: "more + sıfat + than",
            examples: ["This film is more interesting than the last one."]
          },
          {
            name: "Superlative",
            def: "the + sıfat-est / the most + sıfat",
            examples: ["She is the tallest in her class.", "It's the most expensive hotel in town."]
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
        quickFacts: [
          "Kişi zamirleri (I, you, he...) özneyi belirtir.",
          "İyelik zamirleri (mine, yours...) sahiplik belirtir.",
          "İyelik sıfatları (my, your...) her zaman bir isimle birlikte kullanılır."
        ],
        definition:
          "Zamirler, isimlerin yerini tutan kelimelerdir; kişi zamirleri özneyi, iyelik zamirleri ise sahipliği belirtir.",
        typesLabel: "ZAMİR TÜRLERİ — 3 TİP",
        types: [
          {
            name: "Kişi Zamirleri (Subject)",
            def: "I, you, he, she, it, we, they",
            examples: ["She is a teacher.", "They live in Moscow."]
          },
          {
            name: "İyelik Sıfatları (Possessive Adjectives)",
            def: "my, your, his, her, its, our, their — bir isimle birlikte kullanılır.",
            examples: ["This is my book.", "Their house is big."]
          },
          {
            name: "İyelik Zamirleri (Possessive Pronouns)",
            def: "mine, yours, his, hers, its, ours, theirs — tek başına kullanılır.",
            examples: ["This book is mine.", "The red car is hers."]
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
        quickFacts: [
          "Edatlar (prepositions), isimlerin yer ve zaman ilişkisini gösterir.",
          "in, on, at en sık kullanılan üç yer/zaman edatıdır.",
          "Kullanım genelde ezbere öğrenilir, sabit kalıplar vardır."
        ],
        definition:
          "Edatlar, bir ismin başka bir kelimeyle olan yer, zaman ya da yön ilişkisini gösteren küçük ama önemli kelimelerdir.",
        typesLabel: "TEMEL ÜÇLÜ — 3 TİP",
        types: [
          {
            name: "In",
            def: "Aylar, yıllar, şehirler, ülkeler ve kapalı alanlar için.",
            examples: ["in July", "in 2020", "in London", "in the room"]
          },
          {
            name: "On",
            def: "Günler, tarihler ve yüzeyler için.",
            examples: ["on Monday", "on May 5th", "on the table"]
          },
          {
            name: "At",
            def: "Saatler ve nokta belirten yerler için.",
            examples: ["at 6 o'clock", "at the door", "at home"]
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
        quickFacts: [
          "Rusçada isimler cümledeki göreve göre çekimlenir.",
          "6 hâl (padej) vardır.",
          "Her hâlin kendi sorusu vardır — hangi hâlin kullanılacağını bu soru belirler."
        ],
        definition:
          "Hâller (padejler), bir ismin cümle içindeki görevini (özne, nesne, aitlik, yön vb.) gösteren çekim biçimleridir.",
        typesLabel: "HÂLLER — 6 TİP",
        types: [
          {
            name: "Именительный (Yalın Hâl)",
            def: "Kim? Ne? — cümlenin öznesi.",
            examples: ["Это книга. (Bu bir kitap.)"]
          },
          {
            name: "Родительный (Belirtme/Aitlik)",
            def: "Kimin? Neyin? — sahiplik ve yokluk bildirir.",
            examples: ["У меня нет книги. (Kitabım yok.)"]
          },
          {
            name: "Дательный (Yönelme Hâli)",
            def: "Kime? Neye? — bir şeyin verildiği kişi.",
            examples: ["Я дал книгу другу. (Kitabı arkadaşıma verdim.)"]
          },
          {
            name: "Винительный (-i Hâli)",
            def: "Kimi? Neyi? — doğrudan nesne.",
            examples: ["Я читаю книгу. (Kitabı okuyorum.)"]
          },
          {
            name: "Творительный (Araç Hâli)",
            def: "Kiminle? Ne ile? — araç ya da birliktelik.",
            examples: ["Я пишу ручкой. (Kalemle yazıyorum.)"]
          },
          {
            name: "Предложный (Yer/Konu Hâli)",
            def: "Kimde? Nerede? Ne hakkında?",
            examples: ["Книга на столе. (Kitap masanın üzerinde.)"]
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
        quickFacts: [
          "Rusçada her fiilin iki görünüşü (vidi) vardır: tamamlanmamış ve tamamlanmış.",
          "Tamamlanmamış görünüş süreci, tamamlanmış görünüş sonucu vurgular.",
          "Genelde tamamlanmış fiil bir önek alarak türetilir."
        ],
        definition:
          "Fiil görünüşü (вид), bir eylemin tamamlanıp tamamlanmadığını ya da devam edip etmediğini gösteren temel bir Rusça dilbilgisi kategorisidir.",
        typesLabel: "GÖRÜNÜŞ — 2 TİP",
        types: [
          {
            name: "Несовершенный вид (Tamamlanmamış)",
            def: "Süreci, tekrarı ya da alışkanlığı vurgular.",
            examples: ["Я писал письмо. (Mektup yazıyordum — süreç.)"]
          },
          {
            name: "Совершенный вид (Tamamlanmış)",
            def: "Sonucu ya da tek seferlik tamamlanmış eylemi vurgular.",
            examples: ["Я написал письмо. (Mektubu yazdım — bitti.)"]
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
        quickFacts: [
          "Rusçada her isim üç cinsiyetten birine aittir.",
          "Cinsiyet genelde ismin son harfinden anlaşılır.",
          "Sıfatlar ve geçmiş zaman fiilleri isme göre cinsiyet alır."
        ],
        definition:
          "İsim cinsiyeti (род), bir ismin eril, dişil ya da nötr olarak sınıflandırılmasıdır; bu sınıflandırma sıfat ve fiil çekimlerini de etkiler.",
        typesLabel: "CİNSİYETLER — 3 TİP",
        types: [
          {
            name: "Мужской род (Eril)",
            def: "Genelde ünsüz harfle biter.",
            examples: ["стол (masa)", "дом (ev)", "город (şehir)"]
          },
          {
            name: "Женский род (Dişil)",
            def: "Genelde -а / -я ile biter.",
            examples: ["книга (kitap)", "земля (toprak)"]
          },
          {
            name: "Средний род (Nötr)",
            def: "Genelde -о / -е ile biter.",
            examples: ["окно (pencere)", "море (deniz)"]
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
        quickFacts: [
          "Rusçada 'gitmek' için tek bir fiil yoktur.",
          "Yürüyerek mi yoksa taşıtla mı gidildiği fiili değiştirir.",
          "Tek yönlü ve çok yönlü hareket ayrı fiillerle anlatılır."
        ],
        definition:
          "Hareket fiilleri (глаголы движения), gidiş biçimine (yürüyerek/taşıtla) ve yönün tek mi çok yönlü mü olduğuna göre değişen özel bir Rusça fiil grubudur.",
        typesLabel: "TEMEL ÇİFTLER — 2 TİP",
        types: [
          {
            name: "Идти / Ходить",
            def: "Yürüyerek gitmek — идти tek yönlü, ходить çok yönlü/alışkanlık.",
            examples: ["Я иду в школу. (Şu an okula yürüyorum.)", "Я хожу в школу каждый день. (Her gün okula yürürüm.)"]
          },
          {
            name: "Ехать / Ездить",
            def: "Taşıtla gitmek — ехать tek yönlü, ездить çok yönlü/alışkanlık.",
            examples: ["Я еду в Москву. (Şu an Moskova'ya gidiyorum.)", "Я езжу на работу на автобусе. (İşe otobüsle giderim.)"]
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
        quickFacts: [
          "Sıfatlar, tanımladıkları isimle cinsiyet, sayı ve hâl bakımından uyumlu olmalıdır.",
          "Sözlük hâli her zaman eril, tekil, yalın hâldir.",
          "Sıfatın sonu, isme göre değişir."
        ],
        definition:
          "Rusçada sıfatlar (прилагательные), tanımladıkları ismin cinsiyetine, sayısına ve hâline göre çekimlenir — Türkçedeki gibi değişmez kalmazlar.",
        typesLabel: "TEKİL ÇEKİM — 3 TİP",
        types: [
          {
            name: "Мужской род (Eril)",
            def: "Genelde -ый / -ий ile biter.",
            examples: ["новый дом (yeni ev)"]
          },
          {
            name: "Женский род (Dişil)",
            def: "Genelde -ая / -яя ile biter.",
            examples: ["новая книга (yeni kitap)"]
          },
          {
            name: "Средний род (Nötr)",
            def: "Genelde -ое / -ее ile biter.",
            examples: ["новое окно (yeni pencere)"]
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
        quickFacts: [
          "Rusçada 6 kişi zamiri vardır.",
          "Zamirler de isimler gibi hâllere göre çekimlenir.",
          "Yalın hâldeki zamirler cümlenin öznesidir."
        ],
        definition:
          "Şahıs zamirleri (личные местоимения), kişileri temsil eden ve cümledeki göreve göre çekimlenen kelimelerdir.",
        typesLabel: "YALIN HÂL — 6 ZAMİR",
        types: [
          {
            name: "Tekil",
            def: "я (ben), ты (sen), он/она/оно (o)",
            examples: ["Я студент. (Ben öğrenciyim.)", "Она врач. (O doktor.)"]
          },
          {
            name: "Çoğul",
            def: "мы (biz), вы (siz), они (onlar)",
            examples: ["Мы дома. (Biz evdeyiz.)", "Они друзья. (Onlar arkadaş.)"]
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
        quickFacts: [
          "Sayılar, yanlarındaki ismin hâlini ve hatta biçimini değiştirir.",
          "1 sayısı isimle cinsiyet uyumu gösterir.",
          "2-4 ve 5+ sayılarından sonra ismin biçimi farklıdır."
        ],
        definition:
          "Rusçada sayılar (числительные), kendilerinden sonra gelen ismin hâlini belirleyen özel bir kelime grubudur.",
        typesLabel: "İSİMLE UYUM — 3 GRUP",
        types: [
          {
            name: "1 (один/одна/одно)",
            def: "İsimle aynı cinsiyette olur, isim yalın hâlde kalır.",
            examples: ["один стол (bir masa)", "одна книга (bir kitap)"]
          },
          {
            name: "2, 3, 4",
            def: "İsim родительный (belirtme) hâlinin tekilinde olur.",
            examples: ["два стола (iki masa)", "три книги (üç kitap)"]
          },
          {
            name: "5 ve üzeri",
            def: "İsim родительный (belirtme) hâlinin çoğulunda olur.",
            examples: ["пять столов (beş masa)", "пять книг (beş kitap)"]
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
        quickFacts: [
          "Emir kipi, bir isteği ya da komutu ifade eder.",
          "Tekil (sen) ve çoğul/resmi (siz) olmak üzere iki biçimi vardır.",
          "Fiil kökü + -и / -й / -ь gibi eklerle kurulur."
        ],
        definition:
          "Emir kipi (повелительное наклонение), birine bir şey yapmasını söylemek ya da rica etmek için kullanılan fiil biçimidir.",
        typesLabel: "İKİ BİÇİM — 2 TİP",
        types: [
          {
            name: "Tekil (sen)",
            def: "Fiil kökü + -и / -й / -ь",
            examples: ["Читай! (Oku!)", "Смотри! (Bak!)"]
          },
          {
            name: "Çoğul / Resmi (siz)",
            def: "Tekil biçim + -те",
            examples: ["Читайте! (Okuyun!)", "Смотрите! (Bakın!)"]
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
        quickFacts: [
          "Karşılaştırma sıfatları genelde -ее / -ей eki alır.",
          "Bazı sıfatlar düzensizdir (хороший → лучше).",
          "En üstünlük derecesi самый + sıfat ile kurulur."
        ],
        definition:
          "Karşılaştırma (сравнение), iki ya da daha fazla şeyi kıyaslamak için kullanılan sıfat biçimleridir.",
        typesLabel: "YAPI — 2 TİP",
        types: [
          {
            name: "Karşılaştırma Derecesi",
            def: "sıfat kökü + -ее / -ей, ya da düzensiz biçim.",
            examples: ["быстрее (daha hızlı)", "лучше (daha iyi — хороший'den)"]
          },
          {
            name: "En Üstünlük Derecesi",
            def: "самый + sıfat",
            examples: ["самый быстрый (en hızlı)", "самый лучший (en iyi)"]
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
