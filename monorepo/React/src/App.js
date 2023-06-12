import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import List from "./List";
import ListOpen from "./ListOpen";
import NoMatch from "./NoMatch";

export default function App() {
  return (<Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<List />} />
              <Route path="/:id" element={<ListOpen />} />

              {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
              <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
  );
}

