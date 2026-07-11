import { createRoot } from "react-dom/client";

// MDB UI Integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import "./index.css";

createRoot(document.getElementById('root')).render(<App />);