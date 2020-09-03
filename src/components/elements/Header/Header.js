import React from 'react';
import { Link } from '@reach/router';



import { 
    StyledHeader, 

} from '../../styles/StyledHeader';



const Header = () => (
<StyledHeader>
  <div className="header-content">
    <Link to="/">
      Movie Info - React
    </Link>

  </div>
</StyledHeader>
)

export default Header;