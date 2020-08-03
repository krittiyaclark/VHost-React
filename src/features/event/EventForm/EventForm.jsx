import React, { useState } from 'react'
import { Segment, Form, Button, Header } from 'semantic-ui-react'
import cuid from 'cuid'

function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent }) {
	const initialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	}
	const [values, setValues] = useState(initialValues)

	function handleFormSubmit() {
		createEvent({
			...values,
			id: cuid(),
			hostedBy: 'Bob',
			attendees: [],
			hostPhotoURL: '/assets/user.png',
		})
		setFormOpen(false)
	}

	function handleInputChange(event) {
		const { name, value } = event.target
		setValues({ ...values, [name]: value })
	}

	return (
		<Segment clearing>
			<Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
			<Form onSubmit={handleFormSubmit}>
				<Form.Field>
					<input
						type='text'
						placeholder='Event title'
						name='title'
						value={values.title}
						onChange={(event) => handleInputChange(event)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Category'
						name='category'
						value={values.category}
						onChange={(event) => handleInputChange(event)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Description'
						name='description'
						value={values.description}
						onChange={(event) => handleInputChange(event)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='City'
						name='city'
						value={values.city}
						onChange={(event) => handleInputChange(event)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Venue'
						name='venue'
						value={values.venue}
						onChange={(event) => handleInputChange(event)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='date'
						placeholder='Date'
						name='date'
						value={values.date}
						onChange={(event) => handleInputChange(event)}
					/>
				</Form.Field>
				<Button type='submit' floated='right' positive content='Submit' />
				<Button
					onClick={() => setFormOpen(false)}
					type='submit'
					floated='right'
					content='Cancel'
				/>
			</Form>
		</Segment>
	)
}

export default EventForm
