import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import './index.css';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


function HomePage() {

  const [friend, setFriend] = useState([]);
  const navigate = useNavigate();

  const fetchFriend = async () => {
    try {
      const response = await axios.get('/users');
      console.log(response.data);
      setFriend(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigate = (userId) => {
    if (userId == 1) navigate("/profile");
    else navigate(`/profile/${userId}`);
  }

  useEffect(() => {
    fetchFriend();
  }, []);

  return <div className='App'>
    <h1>Home Page</h1>
    {friend.map((f) => (
      <div
        className='friend'
        key={f.id}
        onClick={() => handleNavigate(f.id)}
      >
        <h3>{f.name}</h3>
        <h4>{f.email} , {f.phone}</h4>
      </div>))}
  </div>;
};

function ProfilePage() {
  return <div className='App'>Profile Page</div>;
};

function FriendPage() {
  const { userId } = useParams();
  const [friend, setFriend] = useState(null);

  const fetchFriendDetail = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      console.log(data);
      setFriend(data);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    fetchFriendDetail();
  }, [])
  return <div className='App'>
    {friend && (<div className='friend'>
      <h3>{friend.name}</h3>
      <h4>{friend.phone}</h4>
    </div>)}
  </div>;
};

function FeedPage() {
  return <div className='App'>

  </div>;
};

function NotFoundPage() {
  return <div className='App'>404: Not Found</div>;
}

function AppLayout() {

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile/5">Friend</Link>
        <Link to="/feed">Feed</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <Routes>
        {/* Parent */}
        <Route path='/' element={<AppLayout />} >
          <Route path='' element={<HomePage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='profile/:userId' element={<FriendPage />} />
          <Route path='feed' element={<FeedPage />} />
          <Route path='*' element={<Navigate to='/' />} />
          {/* Child */}
        </Route>
      </Routes>
    </BrowserRouter>
  );



//<Routes>
//<Route path='/' element={<HomePage />} />
//<Route path='/profile' element={<ProfilePage />} />
//<Route path='/profile/:userId' element={<FriendPage />} />
//<Route path='/feed' element={<FeedPage />} />
//<Route path='*' element={<Navigate to='/' />} />
{/* path ='*' คือ path ใดๆ ที่ไม่ได้ประกาศไว้ข้างบน
  Navigate เอาไว้สำหรับ user พิมหลัง / ที่มั่วๆ ก็จะให้ Link ไปหน้าที่เรา set ไว้แทน */}
{/* <Route path='*' element={<NotFoundPage />} /> */ }
//</Routes>
