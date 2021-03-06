var Profile = $.Class.create({
	initialize: function(candidate) {
		this.candidate = candidate;
		this.template = '<div id="profile-${id}" class="profile-panel">'
			+ '<div class="profile-fieldset-title">Personal Info</div>'
			+ '<div class="profile-panel-body">'
				+ '<div class="profile-field">'
					+ '<div class="profile-form-label">'
						+ '<span>Name</span>'
					+ '</div>'
					+ '<div class="profile-form-field-container">'
						+ '<span>${name}</span>'
					+ '</div>'
				+ '</div>'
				+ '<div class="profile-field">'
					+ '<div class="profile-form-label">'
						+ '<span>Gender</span>'
					+ '</div>'
					+ '<div class="profile-form-field-container">'
						+ '<span>${gender}</span>'
					+ '</div>'
				+ '</div>'
				+ '<div class="profile-field">'
					+ '<div class="profile-form-label">'
						+ '<span>College</span>'
					+ '</div>'
					+ '<div class="profile-form-field-container">'
						+ '<span>${college}</span>'
					+ '</div>'
				+ '</div>'
				+ '<div class="profile-field">'
					+ '<div class="profile-form-label">'
						+ '<span>Logic</span>'
					+ '</div>'
					+ '<div class="profile-form-field-container">'
						+ '<span>${logic}</span>'
					+ '</div>'
				+ '</div>'
				+ '<div class="profile-field">'
					+ '<div class="profile-form-label">'
						+ '<span>Wonderlic</span>'
					+ '</div>'
					+ '<div class="profile-form-field-container">'
						+ '<span>${wonderlic}</span>'
					+ '</div>'
				+ '</div>'
			+ '</div>'
		+ '</div>';
	},
	render:function() {
		var html = this.template.replace("${name}", this.candidate.name)
								.replace("${college}", this.candidate.college)
								.replace("${logic}", this.candidate.logic_correct)
								.replace("${gender}", this.candidate.gender_str())
								.replace("${wonderlic}", this.candidate.w_correct)
								.replace("${id}", this.candidate.id)
		$("#profiles").append($(html))
		$("#" + this.candidate.id).colorbox({width:"50%", inline:true, href:"#profile-" + this.candidate.id});
	}
});
