
async function requestHandler(req, res){

	try {
		const user = await User.findById(req.userId);
		const tasks = await Tasks.findById(user.tasksId);
		tasks.competed = true;
		await tasks.save();
		res.send('Task Completed');
	}
	catch(e){
		res.send(e)
	}
}