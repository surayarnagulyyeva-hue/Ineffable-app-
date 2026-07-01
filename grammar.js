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
      { id: "modals", label: "Kip Fiilleri", mark: "M" }
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
      { id: "motion", label: "Hareket Fiilleri", mark: "Д" }
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
      }
    ]
  }
};

if (typeof module !== "undefined") {
  module.exports = GRAMMAR_DATA;
}
