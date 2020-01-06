
import React, { ReactNode } from 'react';
import { Header } from '../Components/Shared/Header'
import { Footer } from '../Components/Shared/Footer'
type Props = {
  children: ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
    <div>
    <Header/>
	<div>
        
        <div style={{ marginTop : '100px' }}>
            
                { children }
            
        </div>
    </div>
    <Footer/>
    </div>
);

export default Layout;
