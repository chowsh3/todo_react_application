import React from 'react';
import './Nav.css';

function Header() {
    return (
        <div className="Nav sticky-top navbar-expand-md navbar-dark bg-dark">
            <nav className="navbar ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">
                                <svg
                                    className="bi bi-house-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                                        clip-rule="evenodd" />
                                    <path fill-rule="evenodd"
                                        d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                                        clip-rule="evenodd" />
                                </svg></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">
                                <svg className="bi bi-list-ul"
                                    width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd" />
                                </svg></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">
                                <svg
                                    className="bi bi-bell-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                </svg>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">
                                <svg className="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                                </svg>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">
                                <svg
                                    className="bi bi-archive-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 000 1h4a.5.5 0 000-1H6zM.8 1a.8.8 0 00-.8.8V3a.8.8 0 00.8.8h14.4A.8.8 0 0016 3V1.8a.8.8 0 00-.8-.8H.8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">
                                <svg className="bi bi-plus-circle-fill" width="2em" height="2em"
                                    viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"
                                        clip-rule="evenodd" />
                                </svg> Add New List
                            </button>
                        </li>
                    </ul>

                </div>


                <div className="side">
                    <button type="button" className="btn btn-light">
                        <svg className="bi bi-check" width="1em" height="1em"
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <button type="button" className="btn btn-light">
                        <svg className="bi bi-bell" width="1em" height="1em"
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z" />
                            <path fill-rule="evenodd"
                                d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button type="button" className="btn btn-light">
                        <svg className="bi bi-archive" width="1em" height="1em"
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z"
                                clip-rule="evenodd" />
                            <path fill-rule="evenodd"
                                d="M5.5 7.5A.5.5 0 016 7h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 00-1 1v2a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                </div>


            </nav>

        </div>


    );
}

export default Header;

