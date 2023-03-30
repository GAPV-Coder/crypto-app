import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
	Navbar,
	HomePage,
	Exchanges,
	Cryptocurrencies,
	News,
	CryptoDetails
} from './components';

import './App.css';

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route
								exact
								path="/exchanges"
								element={<Exchanges />}
							/>
							<Route
								exact
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							/>
							<Route
								exact
								path="/crypto/:coinId"
								element={<CryptoDetails />}
							/>
							<Route exact path="/news" element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Cryptoverse <br />
						© 2023 GAPV-Coder. All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/" element={<HomePage />} />
						<Link to="/exchange" element={<Exchanges />} />
						<Link to="/news" element={<News />} />
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
