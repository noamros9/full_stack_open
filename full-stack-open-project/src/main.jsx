import * as apps from './appsRenderingFunctions'

switch (import.meta.env.VITE_ROOT_APP) {
    case 'CourseInfoApp':
        apps.renderCourseInfoApp();
        break;
    case 'AnecdotesApp':
        apps.renderAnecdotesApp();
        break;
    case 'UnicafeApp':
        apps.renderUnicafeApp();
        break;
    case 'NotesApp':
        apps.renderNotesApp();
        break;
    case 'PhonebookApp':
        apps.renderPhonebookApp();
        break;
    default:
        apps.renderApp();
}

