import {colors} from '../const.js';
import {getRandomArrayItem} from '../utils.js';
import {getRandomDate} from '../utils.js';

const descriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const defaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const generateRepeatingDays = () => {
  return Object.assign({}, defaultRepeatingDays, {
    'mo': Math.random() > 0.5,
  });
};

const generateTags = (tagsArray) => {
  return tagsArray
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(descriptionItems),
    dueDate,
    repeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(tags)),
    color: getRandomArrayItem(colors),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
