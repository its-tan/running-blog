export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export const defaultLang = 'vi';

export const ui = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.blog': 'Bài viết',
    'home.title': 'Nhật ký chạy bộ',
    'home.subtitle': 'Kinh nghiệm chạy bộ và cách khai thác tính năng đồng hồ để tập luyện hiệu quả hơn.',
    'post.readmore': 'Đọc tiếp',
    'post.publishedOn': 'Đăng ngày',
    'post.activityType': 'Loại buổi tập',
    'lang.switch': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Posts',
    'home.title': 'Running Journal',
    'home.subtitle': "Running experience and how to use your watch's features to train smarter.",
    'post.readmore': 'Read more',
    'post.publishedOn': 'Published on',
    'post.activityType': 'Workout type',
    'lang.switch': 'Tiếng Việt',
  },
} as const;

export type Lang = keyof typeof ui;
