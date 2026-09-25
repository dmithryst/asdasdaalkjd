export type TransferKind = "keep" | "relearn" | "new"

export type Skill = {
  id: string
  title: string
  detail: string
  kind: TransferKind
}

export type Phase = {
  id: string
  week: string
  title: string
  goal: string
  items: string[]
}

export type TrackTopic = {
  id: string
  title: string
  why: string
  know: string[]
}

export type Project = {
  id: string
  title: string
  track: "rn" | "ios" | "both"
  outcome: string
  stack: string
}

export type Resource = {
  title: string
  href: string
  note: string
}

export const nav = [
  { href: "#transfer", label: "Что уже есть" },
  { href: "#path", label: "Какой путь" },
  { href: "#shifts", label: "Сдвиги мышления" },
  { href: "#roadmap", label: "Дорожная карта" },
  { href: "#tracks", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#checklist", label: "Чек-лист" },
] as const

export const transferSkills: Skill[] = [
  {
    id: "react-model",
    title: "Модель React",
    detail:
      "Компоненты, хуки, композиция, однонаправленный поток данных. В RN это тот же React, не «другой фреймворк».",
    kind: "keep",
  },
  {
    id: "ts",
    title: "TypeScript",
    detail:
      "Типы, дженерики, строгие пропсы. В мобильной разработке TS почти стандарт, особенно в Expo.",
    kind: "keep",
  },
  {
    id: "state",
    title: "Стейт и данные",
    detail:
      "TanStack Query, Zustand, Redux, Context — всё это работает. Серверное состояние важнее локального, как и в вебе.",
    kind: "keep",
  },
  {
    id: "architecture",
    title: "Архитектура фич",
    detail:
      "Слои, границы модулей, дизайн-система, код-ревью. Семь лет опыта здесь весят больше, чем знание View vs div.",
    kind: "keep",
  },
  {
    id: "testing-js",
    title: "Тесты на JS",
    detail:
      "Jest / Vitest, React Testing Library, моки сети. RNTL почти тот же RTL, только без DOM-селекторов.",
    kind: "keep",
  },
  {
    id: "styling",
    title: "Стили и вёрстка",
    detail:
      "CSS, каскад, Grid, селекторы, hover, медиазапросы — в RN этого нет. Flexbox остаётся, но ось по умолчанию — колонка.",
    kind: "relearn",
  },
  {
    id: "navigation",
    title: "Навигация",
    detail:
      "React Router и URL-first мышление. В мобильном мире стеки, табы, модалки и жесты «назад». Expo Router ближе к App Router, но экраны — не страницы.",
    kind: "relearn",
  },
  {
    id: "lists",
    title: "Списки",
    detail:
      "В вебе можно нарисовать 500 div. На телефоне нужен виртуальный список, иначе память и кадры умрут.",
    kind: "relearn",
  },
  {
    id: "native-ui",
    title: "Нативные примитивы",
    detail:
      "View, Text, Image, Pressable, TextInput, ScrollView, Modal. Текст нельзя класть в View без Text. Картинка — не img.",
    kind: "new",
  },
  {
    id: "gestures",
    title: "Жесты и UI-поток",
    detail:
      "Pan, pinch, swipe-to-dismiss. Анимации на UI-потоке через Reanimated worklets, иначе будет джанк.",
    kind: "new",
  },
  {
    id: "platform",
    title: "Платформенные API",
    detail:
      "Камера, пуши, биометрия, файлы, шаринг, deep link, permissions, AppState. Это не fetch к бэкенду.",
    kind: "new",
  },
  {
    id: "release",
    title: "Сборка и сторы",
    detail:
      "Сертификаты, профили, EAS/Xcode, TestFlight, App Store Review, Play Console. Релиз — отдельная профессия.",
    kind: "new",
  },
]

export const pathCards = [
  {
    id: "rn",
    kicker: "Основной путь",
    title: "React Native + Expo",
    verdict: "Сюда идите первым",
    points: [
      "70–80% вашего React-опыта переносится сразу",
      "Один код на iOS и Android, рынок вакансий шире",
      "Expo Router ощущается как Next.js App Router",
      "Через 2–3 месяца можно выкатить приложение в TestFlight",
    ],
    fit: "Если цель — мобильные продукты, кроссплатформа и рост вокруг React-экосистемы.",
  },
  {
    id: "ios",
    kicker: "Глубокий путь",
    title: "Нативный iOS: Swift + SwiftUI",
    verdict: "Не стартовая точка",
    points: [
      "Другой язык, другой рантайм, другой тулинг",
      "Максимальное качество и доступ к платформе",
      "Другой рынок: продуктовые iOS-команды, Apple-центричные компании",
      "Порог выше: Xcode, подпись, HIG, конкурентность Swift 6",
    ],
    fit: "Если цель — именно iOS-инженер, а не «ещё один клиент на JS». Имеет смысл после первого RN-релиза.",
  },
] as const

export const shifts = [
  {
    id: "no-dom",
    title: "Нет DOM и нет HTML",
    from: "<div>Привет</div>",
    to: "<View><Text>Привет</Text></View>",
    body: "Любая строка должна жить внутри Text. Нет innerHTML, нет querySelector, нет CSS-классов из веба (пока не подключите NativeWind). Отладка — это React Native DevTools и логи Metro, а не Elements в Chrome.",
  },
  {
    id: "flex",
    title: "Flexbox, но колонка по умолчанию",
    from: "display: flex; flex-direction: row",
    to: "flexDirection: 'row'  // column — дефолт",
    body: "Yoga-лейаут. Нет классического Grid как в CSS. Есть gap, но нет каскада, нет specificity, нет position: sticky в привычном виде. Размеры в dp, не в px браузера. Safe area и клавиатура — часть вёрстки, не «потом допилим».",
  },
  {
    id: "threads",
    title: "JS-поток ≠ UI-поток",
    from: "requestAnimationFrame / CSS transition",
    to: "Reanimated worklet на UI-потоке",
    body: "Тяжёлый ререндер в React роняет кадры на телефоне заметнее, чем в браузере. Списки виртуализируют. Жесты и анимации выносят из JS. Новая архитектура (Fabric, JSI, Bridgeless) уже дефолт — мост больше не главная ментальная модель, но синхронность с нативом всё ещё надо чувствовать.",
  },
  {
    id: "platform-feel",
    title: "Платформа — это UX, не user-agent",
    from: "адаптив по ширине экрана",
    to: "HIG + Material, 44pt hit area, жесты системы",
    body: "iOS и Android ждут разного: назад, скролл, шрифты, модалки, настройки. Platform.OS, файлы *.ios.tsx / *.android.tsx, Dynamic Type, тёмная тема системы. «Выглядит как веб» — главная ошибка React-разработчика в сторе.",
  },
  {
    id: "lifecycle",
    title: "Приложение живёт иначе, чем вкладка",
    from: "вкладка открыта, сеть всегда «есть»",
    to: "background, kill, push, cold start",
    body: "Пользователь сворачивает приложение, iOS убивает процесс, пуш открывает конкретный экран, deep link приходит в уже запущенный инстанс. Нужны AppState, восстановление навигации, аккуратная работа с токенами и офлайном.",
  },
]

export const phases: Phase[] = [
  {
    id: "p1",
    week: "Недели 1–2",
    title: "Среда и примитивы",
    goal: "Собрать первый экран на телефоне, не в браузере.",
    items: [
      "Поставить Expo (не голый React Native CLI), Xcode + симулятор iOS, Android Studio или физический девайс",
      "Пройти официальный Expo Tutorial: View, Text, Image, Pressable, TextInput, ScrollView",
      "Выучить StyleSheet и flex: колонка по умолчанию, alignItems, justifyContent, gap",
      "SafeAreaView / react-native-safe-area-context, StatusBar, KeyboardAvoidingView",
      "Запустить одно и то же приложение в iOS Simulator и на Android",
    ],
  },
  {
    id: "p2",
    week: "Недели 3–5",
    title: "Навигация, списки, данные",
    goal: "Сделать приложение из нескольких экранов с реальным API.",
    items: [
      "Expo Router: стеки, табы, динамические маршруты, _layout — это ваш новый App Router",
      "FlashList / FlatList: ключи, windowing, pull-to-refresh, infinite scroll",
      "TanStack Query + fetch/axios, обработка офлайна и ошибки сети",
      "Формы: react-hook-form живёт и здесь, но фокус и клавиатура ведут себя иначе",
      "Хранение: expo-secure-store для токенов, MMKV или AsyncStorage для кэша",
    ],
  },
  {
    id: "p3",
    week: "Недели 6–9",
    title: "Нативное ощущение",
    goal: "Чтобы не выглядело как сайт в WebView.",
    items: [
      "React Native Gesture Handler + Reanimated: свайп, bottom sheet (@gorhom/bottom-sheet)",
      "Хаптики, нативные алерты, ActionSheet, модалки с жестом закрытия",
      "Камера, галерея, шаринг, clipboard, биометрия через Expo модули",
      "Пуши (expo-notifications) и deep linking / universal links",
      "Тёмная тема из системы, шрифты, размеры touch-target 44pt",
    ],
  },
  {
    id: "p4",
    week: "Недели 10–14",
    title: "Релиз и качество",
    goal: "Положить сборку в TestFlight и пережить ревью.",
    items: [
      "EAS Build и EAS Submit, Apple Developer Program (платный аккаунт)",
      "Иконка, splash, privacy manifests, разрешения в Info.plist / entitlements",
      "Sentry или аналог, символика крэшей, базовая аналитика",
      "Тесты: Jest + RNTL на логику, Maestro на критический флоу",
      "OTA через EAS Update: что можно пушить без ревью, а что нельзя",
    ],
  },
  {
    id: "p5",
    week: "Дальше",
    title: "Нативный слой и iOS",
    goal: "Перестать бояться Xcode и Swift.",
    items: [
      "Прочитать чужой SwiftUI-экран и написать крошечное native module на Expo Modules API",
      "Собрать тот же pet-проект на SwiftUI — сравнить навигацию, списки, стейт",
      "Instruments: CPU, память, retain cycles — даже если пишете на JS",
      "Human Interface Guidelines: навигация, модалки, типографика iOS",
      "Решить, углубляться в iOS-вакансии или оставаться RN-инженером с нативным кругозором",
    ],
  },
]

export const rnTopics: TrackTopic[] = [
  {
    id: "rn-core",
    title: "Ядро RN",
    why: "Без этого вы всё ещё веб-разработчик с другим бандлером.",
    know: [
      "Компоненты: View, Text, Image, Pressable, TextInput, ScrollView, FlatList, Modal, ActivityIndicator",
      "Стили: StyleSheet.create, массивы стилей, Platform.select",
      "События касания vs клик, hitSlop, disabled, accessibilityLabel",
      "Metro, Fast Refresh, .env через expo-constants, dev vs prod client",
    ],
  },
  {
    id: "rn-nav",
    title: "Навигация",
    why: "Пользователь думает стеками и жестами, не URL.",
    know: [
      "Expo Router (file-based) или React Navigation 7: native stack, tabs, drawer",
      "Передача params, typed routes, защита экранов (auth gate)",
      "Жест назад iOS, hardware back Android, prevent going back",
      "Deep links, universal links, состояние навигации после cold start",
    ],
  },
  {
    id: "rn-perf",
    title: "Производительность",
    why: "На слабом Android ваш «привычный» ререндер виден глазом.",
    know: [
      "Почему мемоизация, getItemLayout и ключи важнее, чем в вебе",
      "FlashList вместо наивного map; изображения: размеры, кэш, blurhash",
      "Reanimated worklets, runOnUI / runOnJS, не анимировать через setState на каждый кадр",
      "Hermes, профилирование JS, как ловить зависания главного потока",
    ],
  },
  {
    id: "rn-native",
    title: "Нативные модули и архитектура",
    why: "Любое серьёзное приложение упирается в платформу.",
    know: [
      "Expo Modules API: написать тонкую обёртку над iOS API",
      "Когда нужен prebuild / dev client, а когда хватает Expo Go",
      "Новая архитектура: JSI, Fabric, TurboModules — что это значит для библиотек",
      "Читать stack trace нативного крэша и не паниковать в Xcode",
    ],
  },
  {
    id: "rn-release",
    title: "Сторы и эксплуатация",
    why: "Код без релиза — учебное упражнение.",
    know: [
      "Apple Developer, сертификаты, профили, App Store Connect, TestFlight",
      "Google Play: подпись, tracks, privacy policy",
      "Версионирование native vs JS, store review guidelines",
      "Feature flags, staged rollout, мониторинг крэш-free sessions",
    ],
  },
]

export const iosTopics: TrackTopic[] = [
  {
    id: "swift",
    title: "Язык Swift",
    why: "Это не «TypeScript с двоеточиями». Другая система типов и памяти.",
    know: [
      "Структуры vs классы, value semantics, протоколы, extensions, enums с associated values",
      "Optionals, guard, if let, ошибка как тип (throws / Result)",
      "async/await, Task, акторы, Sendable — Swift 6 concurrency",
      "Generics, opaque types, property wrappers — читать чужой код без паники",
    ],
  },
  {
    id: "swiftui",
    title: "SwiftUI и UIKit",
    why: "Новые экраны пишут на SwiftUI, но UIKit никуда не делся.",
    know: [
      "View, State, Binding, Observable / @Observable, environment",
      "NavigationStack, List, ScrollView, sheets, safe area",
      "Когда выходить в UIKit: кастомный скролл, сложные жесты, старые SDK",
      "Xcode Previews, SwiftUI life cycle (App, Scene)",
    ],
  },
  {
    id: "apple-platform",
    title: "Платформа Apple",
    why: "iOS-инженер знает фреймворки, а не только кнопки.",
    know: [
      "Human Interface Guidelines, SF Symbols, Dynamic Type, VoiceOver",
      "URLSession, SwiftData / UserDefaults, Keychain",
      "StoreKit, push (APNs), виджеты, App Intents — по мере надобности",
      "App Store Review, privacy nutrition labels, TestFlight",
    ],
  },
  {
    id: "xcode",
    title: "Xcode и отладка",
    why: "Без этого вы не соберёте даже Hello World на девайсе.",
    know: [
      "Проект, targets, schemes, capabilities, Info.plist, entitlements",
      "Симулятор, девайс, provisioning, подпись",
      "LLDB, view debugger, Instruments (Time Profiler, Leaks, Allocations)",
      "SPM, модули, как подключить RN app как часть workspace",
    ],
  },
]

export const projects: Project[] = [
  {
    id: "proj-notes",
    title: "Заметки офлайн",
    track: "rn",
    outcome: "Примитивы, навигация, локальное хранилище, клавиатура.",
    stack: "Expo, Expo Router, MMKV",
  },
  {
    id: "proj-feed",
    title: "Лента с API",
    track: "rn",
    outcome: "Виртуальный список, пулли-ту-рефреш, пустые и ошибочные состояния, кэш картинок.",
    stack: "FlashList, TanStack Query",
  },
  {
    id: "proj-auth",
    title: "Клиент с логином",
    track: "rn",
    outcome: "Secure store, gated routes, deep link на сброс пароля, биометрия.",
    stack: "expo-secure-store, expo-local-authentication",
  },
  {
    id: "proj-media",
    title: "Камера и шаринг",
    track: "rn",
    outcome: "Permissions, нативный пикер, сжатие, share sheet.",
    stack: "expo-image-picker, expo-sharing",
  },
  {
    id: "proj-ship",
    title: "Сборка в TestFlight",
    track: "both",
    outcome: "Иконка, splash, подпись, ревью, крэш-репорты. Это обязательный проект, не «потом».",
    stack: "EAS Build + Submit",
  },
  {
    id: "proj-swiftui",
    title: "Тот же pet-проект на SwiftUI",
    track: "ios",
    outcome: "Почувствовать разницу стейта, списков и навигации. Цель — грамотность, не портфолио-шедевр.",
    stack: "SwiftUI, SwiftData",
  },
]

export const resources: { group: string; items: Resource[] }[] = [
  {
    group: "React Native и Expo",
    items: [
      {
        title: "Expo Docs и Tutorial",
        href: "https://docs.expo.dev/",
        note: "Стартовать отсюда, не с устаревших гайдов про react-native init.",
      },
      {
        title: "Expo Router",
        href: "https://docs.expo.dev/router/introduction/",
        note: "Навигация, которую вы узнаете, если жили в Next.js.",
      },
      {
        title: "React Native docs",
        href: "https://reactnative.dev/docs/getting-started",
        note: "Компоненты, стиль, новая архитектура. Читать, не зубрить CLI.",
      },
      {
        title: "Reanimated",
        href: "https://docs.swmansion.com/react-native-reanimated/",
        note: "Анимации и жесты. Без этого UI будет «вебовым».",
      },
    ],
  },
  {
    group: "iOS",
    items: [
      {
        title: "Swift Language Guide",
        href: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
        note: "Язык целиком, не «Swift за выходные».",
      },
      {
        title: "Apple: Introducing SwiftUI",
        href: "https://developer.apple.com/tutorials/swiftui",
        note: "Официальный tutorial. Скучно, зато канон.",
      },
      {
        title: "Human Interface Guidelines",
        href: "https://developer.apple.com/design/human-interface-guidelines/",
        note: "Почему ваш RN-экран «не iOS», даже если пиксели совпали.",
      },
      {
        title: "WWDC videos",
        href: "https://developer.apple.com/videos/",
        note: "Concurrency, SwiftUI, privacy. Смотреть выборочно, не все 80 роликов.",
      },
    ],
  },
]

export const antiPatterns = [
  {
    title: "Не начинайте с голого RN CLI",
    body: "В 2026 году дефолт — Expo. Bare workflow понадобится, когда понадобится, а не в день ноль.",
  },
  {
    title: "Не учите Objective-C первым",
    body: "Для новой работы нужен Swift. Obj-C всплывёт в легаси, его читают по факту, не курсом.",
  },
  {
    title: "Не портируйте CSS один в один",
    body: "Позиционирование, тени, шрифты и скролл нативные. Копирование веб-макета даёт «сайт в рамке».",
  },
  {
    title: "Не откладывайте девайс и стор",
    body: "Симулятор врёт по перфу и жестам. TestFlight учит подписи и ревью раньше, чем вы «готовы».",
  },
  {
    title: "Не прыгайте в iOS, пока нет одного RN-релиза",
    body: "Иначе вы одновременно учите платформу, язык и сторы. Семь лет React дают преимущество только если вы его используете.",
  },
]

export const checklistGroups = [
  {
    id: "env",
    title: "Среда",
    items: [
      { id: "mac", label: "Mac с Xcode и симулятором iOS (для iOS без Mac — только теория и облачные билдеры)" },
      { id: "expo", label: "Node, Expo CLI, первый npx create-expo-app на телефоне через Expo Go" },
      { id: "apple-id", label: "Apple ID; понять, зачем платный Apple Developer Program" },
    ],
  },
  {
    id: "rn-skills",
    title: "React Native",
    items: [
      { id: "primitives", label: "Собрать форму логина без библиотек UI: клавиатура не перекрывает поле" },
      { id: "router", label: "Три экрана на Expo Router: табы + стек + параметр" },
      { id: "list", label: "Список на 500+ элементов без просадок, пустое и ошибочное состояния" },
      { id: "reanimated", label: "Один жест на Reanimated (свайп-карточки или bottom sheet)" },
      { id: "native-api", label: "Камера или пуш или биометрия — любой нативный API целиком" },
      { id: "testflight", label: "Своя сборка в TestFlight, не только Expo Go" },
    ],
  },
  {
    id: "ios-skills",
    title: "iOS-грамотность",
    items: [
      { id: "swift-read", label: "Прочитать и объяснить чужой SwiftUI-файл: стейт, список, навигация" },
      { id: "hig", label: "Пройти HIG по навигации, модалкам и типографике и сверить свой RN-экран" },
      { id: "module", label: "Написать крошечный Expo native module на Swift" },
      { id: "swiftui-app", label: "Собрать Hello World / клон одной фичи в Xcode на SwiftUI" },
    ],
  },
] as const

export const allCheckIds: string[] = checklistGroups.flatMap((g) =>
  g.items.map((i) => i.id)
)

export const kindLabel: Record<TransferKind, string> = {
  keep: "Забираете с собой",
  relearn: "Переучить",
  new: "С нуля",
}
