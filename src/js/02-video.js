//імпорт lodash.throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// створуня об'єкта player, який ініціалізується з відео
const player = new Player('vimeo-player');

// Задаємо час затримки
const THROTTLE_DELAY = 1000; // milliseconds
const storageKey = 'videoplayer-current-time';

//  методoм on() - підписуємося на подію timeupdate
player.on('timeupdate', throttle(onPlayerTimeUpdate, THROTTLE_DELAY));

//викликається  оновленні часу відтворення
function onPlayerTimeUpdate(event) {
  const time = Math.floor(event.seconds); 
  localStorage.setItem(storageKey, time);
}

const savedTime = localStorage.getItem(storageKey);

if (savedTime) {
  player.setCurrentTime(savedTime || 0);
}



// ! Завдання 2 - відеоплеєр
// HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.
// Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

// 1.Ознайомся з документацією бібліотеки Vimeo плеєра.
// 2.Додай бібліотеку як залежність проекту через npm.
// 3.Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// 4.Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5.Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6.Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// 7.Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.