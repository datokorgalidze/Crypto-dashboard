import React from 'react';
import AppLayout from './AppLayout';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import Content from '../Shared/Content';
import './App.css';


    function App () {
      return (
        <div>
          <AppLayout>
              <AppProvider>
                <AppBar/>
                <Content>
                  <Dashboard/>
                  <Settings/>
                </Content>
              </AppProvider>
            </AppLayout>   
        </div>
      );
    }

export default App;
