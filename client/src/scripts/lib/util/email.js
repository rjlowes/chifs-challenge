const injectEmailLink = (element) => {
    let s = '@'
        , n = 'hello'
        , k = 'activ-business.co.uk'
        , e = n + s + k
        , l = '<a href=mailto:{{spam@test.com}}>{{spam@test.com}}</a>'.replace(/{{.+?(}})/g, e);

    element.replaceWith(l);
};

export {injectEmailLink};

 