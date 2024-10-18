import React from "react";
import './Sidebar.css'

const Sidebar = () => (
  <div>
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      Open Sidebar
    </button>

    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasLabel">Sidebar</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <p>Content inside the sidebar.</p>
      </div>
    </div>
  </div>
);

export default Sidebar;
