import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
	const { data } = useMemo(() => {
		const coinPrice = [];
		const coinTimestamp = [];
		const { history, change } = coinHistory?.data || {};

		if (!history) return {};

		for (let i = 0; i < history.length; i += 1) {
			coinPrice.push(history[i].price);
			coinTimestamp.push(new Date(history[i].timestamp).toLocaleDateString());
		}

		const data = {
			labels: coinTimestamp,
			datasets: [
				{
					label: 'Price In USD',
					data: coinPrice,
					fill: false,
					backgroundColor: '#0071bd',
					borderColor: '#0071bd'
				}
			]
		};

		const options = {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		};

		return { data: { data, options }, change };
	}, [coinHistory]);

	return (
		<>
			<Row className="chart-header">
				<Title level={2} className="chart-title">
					{coinName} Price Chart{' '}
				</Title>
				<Col className="price-container">
					<Title level={5} className="price-change">
						Change: {data.change}%
					</Title>
					<Title level={5} className="current-price">
						Current {coinName} Price: $ {currentPrice}
					</Title>
				</Col>
			</Row>
			<Line {...data} />
		</>
	);
};

export default LineChart;
