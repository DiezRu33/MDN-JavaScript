
function requestHandler(req, res){
	User.findById(req.userId)
		.then(function (user) {
			return Tasks.findById(user.tasksId)
		})
		.then(function (tasks){
			tasks.completed = true;
			return tasks.save();
		})
		.then(function () {
			res.send('Tarea completada')
		})
		.catch(function (error) {
			res.send(errors)
		})
}
