const posts = [{ title: 'Post One', body: 'This is post one', lastactivitytime: '2 jan 1992' }];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.lastactivitytime} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
}

function updatelastactivitytime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currenttime = new Date().getTime();
            posts.forEach((post) => {
                post.lastactivitytime = currenttime;
            });
            resolve(currenttime);
        }, 1000);
    });
}

async function userupdatespost() {
    try {
        await Promise.all([
            createPost({ title: 'Post two', body: 'This is post two', lastactivitytime: '2jan1993' }),
            updatelastactivitytime()
        ]);
        getPosts();
    } catch (error) {
        console.error(error);
    }
}

userupdatespost();
