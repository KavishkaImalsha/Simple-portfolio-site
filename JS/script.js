const postArea = document.getElementById("post-area");

const posts = [
    {img:"https://drive.google.com/file/d/1Ekpa1nIrBdceIzSbrFK6bX2rr73naWZr/preview", title: "Note App", discription: "Simple note app that can same your work.",git:"https://github.com/KavishkaImalsha/Simple-Note-App-using-local-storage"},
    {img:"https://drive.google.com/file/d/1Xe2J6pp_9tNU2CXKv0vGRNdFFLqYLp8e/preview", title: "Simple To Do App", discription: "Simple To Do app that can remove store your task.",git: "https://github.com/KavishkaImalsha/To-Do-App-NewFeatures"},
    {img:"https://drive.google.com/file/d/14N8f7rnedt6dHCi5DqhJCBMEx4Utihpq/preview", title: "Room Resevation Form", discription: "Simple Room Reservation app that store guest details.",git: "https://github.com/katas-for-review/RoomReservationApp"}
];

posts.map((post) => {
    const container = document.createElement("div");
    const textContainer = document.createElement("div");
    container.className = "card mt-2 bg-dark text-white border border border-secondary border-2 col-3 mx-4";
    textContainer.className = "card-body";

    const image = document.createElement("iframe");
    image.src = post.img;

    const title = document.createElement("h5");
    const discription = document.createElement("p");
    const link = document.createElement("a");
    
    title.textContent = post.title;
    title.className = "text-primary";
    discription.textContent = post.discription;
    link.className = "btn btn-outline-primary";
    link.textContent = "Viwe Project"
    link.href = post.git;

    container.appendChild(image);
    textContainer.appendChild(title);
    textContainer.appendChild(discription);
    textContainer.appendChild(link);
    container.appendChild(textContainer);
    postArea.appendChild(container);
});