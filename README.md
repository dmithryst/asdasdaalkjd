# React → React Native и iOS

Полевой гайд для фронтендера с опытом React: что переносится в мобильную разработку, чего не хватает, в каком порядке это учить и когда имеет смысл лезть в нативный iOS.

Сайт — интерактивный чек-лист. Отметки хранятся в `localStorage` браузера.

## Что внутри

- Инвентаризация навыков: что забираете с React, что переучивать, что с нуля
- Развилка React Native + Expo vs Swift/SwiftUI
- Сдвиги мышления (нет DOM, Flexbox-колонка, JS vs UI поток, сторы)
- Дорожная карта по фазам до TestFlight
- Карта навыков RN и iOS
- Шесть практических проектов и чек-лист прогресса

## Как запустить

Нужны Node.js 20+ и Yarn.

```bash
yarn install
yarn dev
```

Откройте [http://127.0.0.1:43217](http://127.0.0.1:43217).

Сборка:

```bash
yarn build
```

Статические файлы появятся в `out/`.

## Деплой

Пуш в `master` запускает GitHub Actions: сайт собирается и публикуется на GitHub Pages.

Один раз в репозитории откройте **Settings → Pages → Build and deployment** и выберите **Source: GitHub Actions**.

Адрес сайта: [https://dmithryst.github.io/asdasdaalkjd/](https://dmithryst.github.io/asdasdaalkjd/).

## Стек

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

Для самой мобильной разработки этот репозиторий не заменяет Xcode и Expo — это карта, не starter приложения.
