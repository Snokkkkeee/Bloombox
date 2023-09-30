/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useReducer, useEffect } from 'react'
import mqtt from '././mqtt.d.ts'

const LIGHT_ON = 'ON'
const LIGHT_OFF = 'OFF'

const options = {
	hostname: '9f17943792d1429c8113cabf8bbb1867.s2.eu.hivemq.cloud',
	port: 8884,
	protocol: 'wss',
	path: '/mqtt',
	username: 'gavin',
	password: 'password',
}

const initialState = {
	temperature: '',
	humidity: '',
	tempTopic: '',
	tempMessage: '',
	humTopic: '',
	humMessage: '',
	isConnected: false,
	lightIsOn: false,
	lightTopic: '',
	lightMessage: '',
	soilMoisture1: '',
	soilMoisture1Message: '',
	soilMoisture1Topic: '',
}

function reducer(state, action) {
	switch (action.type) {
		case 'SET_TEMPERATURE':
			return {
				...state,
				temperature: action.payload.message,
				tempTopic: action.payload.topic,
				tempMessage: action.payload.message,
			}
		case 'SET_HUMIDITY':
			return {
				...state,
				humidity: action.payload.message,
				humTopic: action.payload.topic,
				humMessage: action.payload.message,
			}
		case 'SET_LIGHT':
			const isLightOn = action.payload.message === 'ON'
			const lightTopic = action.payload.topic
			const lightMessage = state.lightIsOn ? 'ON' : 'OFF'
			if (state.lightIsOn !== isLightOn) {
				const client = mqtt.connect(options)
				client.publish(lightTopic, lightMessage)
				console.log('Light has been published')
				client.end()
			}
			return {
				...state,
				lightIsOn: isLightOn,
				lightTopic,
				lightMessage: lightMessage,
			}

		case 'SET_SOIL_MOISTURE_1':
			return {
				...state,
				soilMoisture1: action.payload.message,
				soilMoisture1Topic: action.payload.topic,
				soilMoisture1Message: action.payload.message,
			}
		case 'SET_IS_CONNECTED':
			return { ...state, isConnected: true }
	}
}

export default function TempHumiItem() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		let client = mqtt.connect(options)

		client.on('connect', function () {})

		client.subscribe('Temperature')
		client.subscribe('Humidity')
		client.subscribe('Light')
		client.subscribe('SoilMoisture1')

		client.on('message', function (topic, message) {
			console.log('Received message:', topic, message.toString())
			if (topic === 'Temperature') {
				dispatch({
					type: 'SET_TEMPERATURE',
					payload: {
						message: message.toString(),
						topic,
					},
				})
			} else if (topic === 'Humidity') {
				dispatch({
					type: 'SET_HUMIDITY',
					payload: {
						message: message.toString(),
						topic,
					},
				})
			} else if (topic === 'Light') {
				dispatch({
					type: 'SET_LIGHT',
					payload: {
						message: LIGHT_OFF,
						topic: 'Light',
					},
				})
			} else if (topic === 'SoilMoisture1') {
				dispatch({
					type: 'SET_SOIL_MOISTURE_1',
					payload: {
						message: message.toString(),
						topic,
					},
				})
			}
			dispatch({ type: 'SET_IS_CONNECTED' })
		})

		function publishLight(lightStatus) {
			// eslint-disable-next-line no-undef
			props.client.publish('Light', lightStatus)
			console.log('Published Light')
		}

		return () => {
			client.end()
		}
	}, [])

	return [
		state.tempMessage,
		state.humMessage,
		state.lightMessage,
		state.soilMoisture1Message,
	]
}
