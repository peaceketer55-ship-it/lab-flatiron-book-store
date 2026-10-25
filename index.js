const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}


const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

const bookList = document.getElementById("book-list");
bookList.innerHTML = "";

bookStore.books.forEach((book) => {
    const bookContainer = document.createElement("li");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookImage = document.createElement("img");

    bookContainer.classList.add("list-li");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.imageUrl;

    bookContainer.append(bookTitle, bookAuthor, bookImage);
    bookList.append(bookContainer);
});

function displayPosts(posts) {
    const postList = document.getElementById("post-list");
    postList.replaceChildren();

    posts.forEach((post) => {
        const postContainer = document.createElement("li");
        const postTitle = document.createElement("h1");
        const postBody = document.createElement("p");

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        postContainer.append(postTitle, postBody);
        postList.append(postContainer);
    });
}

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
        }

        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Unable to load posts.", error);
    }
}

fetchPosts();
