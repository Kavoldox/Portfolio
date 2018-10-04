import React from "react";
import Link from "gatsby-link";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHandPaper, faPencilRuler, faCode, faWrench,  faBars, faTimes, faArrowRight, faArrowLeft, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHandPaper, faPencilRuler, faCode, faWrench, faBars, faTimes, faArrowRight, faArrowLeft, faLongArrowAltDown)

import Nav from '../components/nav.js';
import "../stylesheets/index.scss"

export default ({ children }) =>
  <div className="body">
    <header>
      <Nav />
    </header>
    {children()}
    <footer>
      <span>
        Copyright &copy; Timothé Gosset - {(new Date()).getFullYear()}
      </span>
    </footer>
  </div>
