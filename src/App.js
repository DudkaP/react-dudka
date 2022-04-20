import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts";
import {AboutPage, HomePage, LoginPage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./Pages";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }/>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;