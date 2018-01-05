export function create_router(app) {

    const router = Router({
        '/'() {
            app.show_page('hero');
        },
        '/home'() {
            app.show_page('home');
        },
        '/booking'() {
            app.show_page('booking');
        },
        '/navigation'() {
            app.show_page('navigation');
        },
        '/gallery'() {
            app.show_page('gallery');
        },
        '/footer'() {
            app.show_page('footer');
        },
        '/details'() {
            app.show_page('details');
        },
        '/contact'() {
            app.show_page('contact');
        },
    });

    router.refresh = () => window.onhashchange();

    router.configure({
        notfound() {
            console.error('url not found');
            app.navigate('test');
        },
        before() {
            app.set({
                no_scroll: false,
                url: window.location.hash.slice(1),
            });
        },
    });

    router.init();
}