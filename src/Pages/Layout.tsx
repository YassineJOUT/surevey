
import React, { ReactNode } from 'react';
import { Header } from '../Components/Shared/Header'
import { Footer } from '../Components/Shared/Footer'
type Props = {
  children: ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
    <div>
    
	<div>
        
        <div style={{ marginTop : '100px' }}>
            
                { children }
            
        </div>
    </div>
   
    </div>
);

export default Layout;
