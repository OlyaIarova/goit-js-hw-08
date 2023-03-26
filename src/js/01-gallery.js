// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const containerGallery = document.querySelector('.gallery');
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const createGalleryMarkup = galleryItems => {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href=${original} >
                <img 
                 class="gallery__image"
                 src=${preview} 
                 alt=${description} />
            </a>`;
        })
        .join('');
};

containerGallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

// Ініціалізація бібліотеки

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    overlayOpacity: 0.5,
});

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1.Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// 2.Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
