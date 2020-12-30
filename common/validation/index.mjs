import { Author, Book, Publisher, User } from '../entities';
import PropsValidationBuilder from './PropsValidationBuilder';

export { default as patterns } from './patterns';
export { default as enums } from './enums';
export { default as FormValidationBuilder } from './FormValidationBuilder';

export const authorValidator = PropsValidationBuilder(Author);
export const bookValidator = PropsValidationBuilder(Book);
export const publisherValidator = PropsValidationBuilder(Publisher);
export const userValidator = PropsValidationBuilder(User);

export { validateIsbn10, validateIsbn13, from10To13, from13To10 } from './isbn';

export { imageUrlExists } from './img-url';
