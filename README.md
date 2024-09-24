# Swagger Petstore GET Request

Проект на TypeScript для выполнения GET-запроса к API Swagger Petstore и вывода полученных данных в консоль.

## Описание

Этот проект выполняет GET-запрос к эндпоинту [Swagger Petstore](https://petstore3.swagger.io/) для получения списка питомцев по статусу и выводит полученные данные в консоль.

## Требования

- [Node.js](https://nodejs.org/) версии 14 или выше
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

## Установка

1. **Клонируйте репозиторий:**

    ```bash
    git clone https://github.com/your-username/swagger-petstore-get.git
    ```

    Замените `your-username` на ваше имя пользователя GitHub.

2. **Перейдите в директорию проекта:**

    ```bash
    cd swagger-petstore-get
    ```

3. **Установите зависимости:**

    Используя npm:

    ```bash
    npm install
    ```

    Или используя yarn:

    ```bash
    yarn install
    ```

## Использование

### Компиляция TypeScript

Проект написан на TypeScript и требует компиляции в JavaScript перед запуском.

1. **Соберите проект:**

    Используя npm:

    ```bash
    npm run build
    ```

    Или используя yarn:

    ```bash
    yarn build
    ```

    Это скомпилирует TypeScript файлы в директорию `dist`.

### Запуск проекта

После компиляции можно запустить проект, используя скомпилированный файл.

1. **Запустите проект:**

    Используя npm:

    ```bash
    npm start
    ```

    Или используя yarn:

    ```bash
    yarn start
    ```

    В консоли вы увидите полученные данные о питомцах со статусом "available".

## Скрипты

- **`npm run build`**: Компилирует TypeScript файлы в JavaScript и помещает их в директорию `dist`.
- **`npm start`**: Запускает скомпилированный JavaScript файл из директории `dist`.
