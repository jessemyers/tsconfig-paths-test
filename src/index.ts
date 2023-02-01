import { App } from '~/app';

if (typeof require !== 'undefined' && require.main === module) {
    const app = new App();
    app.run();
}
