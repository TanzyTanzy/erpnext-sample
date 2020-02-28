frappe.views.calendar["Meeting"] = {
	field_map: {
		"start": "fstart",
		"end": "end",
		"id": "name",
		"title": "title",
		"docstatus": 1
	},
	options: {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month'
		}
	},
	get_events_method: "meeting.api.get_meetings"
}