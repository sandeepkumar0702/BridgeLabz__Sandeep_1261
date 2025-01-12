function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("User not found.");
            }
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { id: 1, title: "Post 1" },
                    { id: 2, title: "Post 2" },
                ]);
            } else {
                reject("Posts not found.");
            }
        }, 1000);
    });
}

function getUserData(userId) {
    fetchUser(userId)
        .then((user) => {
            console.log("User fetched:", user);
            return fetchUserPosts(user.id);
        })
        .then((posts) => {
            console.log("Posts fetched:", posts);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
        .finally(() => {
            console.log("Operation complete.");
        });
}

getUserData(1);
getUserData(2);
