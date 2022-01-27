import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React from 'react';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <main className="cr-app bg-light">
            <Header />
                <Content fluid>               
                    {children}                
                </Content>   
            <Footer />   
        </main>
    );
  }
}

export default MainLayout;
