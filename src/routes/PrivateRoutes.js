// src/PrivateRoutes.js
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import TutorDashboard from '../components/dashboards/tutor-dashboard/TutorDashboard';
import AdminDashboard from '../components/dashboards/admin-dashboard/AdminDashboard';
import StudentDashboard from '../components/dashboards/student-dashboard/StudentDashboard';
import Signup from '../pages/Signup';
import Home from '../pages/Home'; // Ensure you have a Login component if needed
import EditProfile from '../components/dashboards/student-dashboard/EditProfile';
import Dashboard from "../components/dashboards/student-dashboard/Dashboard"
import ParentalWatch from '../components/dashboards/student-dashboard/ParentalWatch';
import StudentArchives from '../components/dashboards/student-dashboard/StudentArchives';
import QuranRevision from '../components/dashboards/student-dashboard/QuranRevision';
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const getUserRole = () => {
  return localStorage.getItem('role');
};

// PrivateRoute component for role-based access
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        roles.includes(getUserRole()) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        )
      ) : (
        <Redirect to="/signup" />
      )
    }
  />
);

const PrivateRoutes = () => {
  const userRole = getUserRole();
  const isUserAuthenticated = isAuthenticated();

  return (
    <Switch>
      {/* Redirect based on role if authenticated */}
      <Route
        path="/"
        exact
        render={() => {
          if (isUserAuthenticated) {
            if (userRole === 'student') return <Redirect to="/student-dashboard" />;
            if (userRole === 'teacher') return <Redirect to="/tutor-dashboard" />;
            if (userRole === 'admin') return <Redirect to="/admin-dashboard" />;
            return <Redirect to="/signup" />;
          }
          return <Redirect to="/signup" />;
        }}
      />
      {/* Define private routes with access control */}
      <PrivateRoute
        path="/students/dashboard"
        component={StudentDashboard}
        roles={['student']}
      />
      <PrivateRoute
        path="/students/edit-profile"
        component={EditProfile}
        roles={['student']}
      />
       {/* <PrivateRoute
        path="/students/dashboard"
        component={Dashboard}
        roles={['student']}
      /> */}
       <PrivateRoute
        path="/students/parental_watch"
        component={ParentalWatch}
        roles={['student']}
      />
       <PrivateRoute
        path="/students/on_demand"
        component={StudentArchives}
        roles={['student']}
      />
       <PrivateRoute
        path="/students/quran_revision"
        component={QuranRevision}
        roles={['student']}
      />
      <PrivateRoute
        path="/tutor-dashboard"
        component={TutorDashboard}
        roles={['teacher']}
      />
      <PrivateRoute
        path="/admin-dashboard"
        component={AdminDashboard}
        roles={['admin']}
      />
      {/* Public routes */}
      <Route path="/signup" component={Signup} />
      <Route path="/" component={Home} />
      {/* Fallback for any other routes */}
      <Route path="*" render={() => <Redirect to={isUserAuthenticated ? (userRole === 'student' ? '/student-dashboard' : userRole === 'teacher' ? '/tutor-dashboard' : '/admin-dashboard') : '/'} />} />
    </Switch>
  );
};

export default PrivateRoutes;
