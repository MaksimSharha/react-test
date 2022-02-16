import React, {useRef, useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {


    const [posts, setPosts] = useState([
        {id: 1, title: 'Title', body: 'Description'},
        {id: 2, title: 'Title 2', body: 'Description'},
        {id: 3, title: 'Title 3', body: 'Description'},
    ])

    const [selectedSort, setSelectedsSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    // Getting a post from child element
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedsSort(sort);
        setPosts([...posts].sort((a, b ) => a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>

        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaulValue='Sort by'
                option={[
                    {value: 'title', name: 'Sort by name'},
                    {value: 'body', name: 'Sort by description'},
                ]}
            />
        </div>

        {posts.length
            ?
            <PostList remove={removePost} posts={posts} title={'Post list 1'}/>
            :
            <h1 style={{textAlign: "center"}}>
                Posts not found.
            </h1>
        }
    </div>
  );
}

export default App;
