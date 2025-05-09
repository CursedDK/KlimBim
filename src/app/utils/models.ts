export class ProjectModel {
	id: number = 0; 
	title: string = '';
	description: string = '';
	technologies: string[] = [];
	image: string = '';
	github: string = '';
	liveLink: string = '';
	featured: boolean = false;
	createdAt: Date = new Date();
	updatedAt: Date = new Date();

	static createDummyData() {
		var projectDTO = new ProjectModel();

		projectDTO.id = Math.floor(Math.random() * 1000);
		projectDTO.title = 'Project ' + projectDTO.id;
		projectDTO.description = 'Description for project ' + projectDTO.id;
		projectDTO.technologies = ['Angular', 'TypeScript', 'HTML', 'CSS'];
		projectDTO.image = 'https://i.imgur.com/KQjMszt.png';
		projectDTO.github = '';
		projectDTO.liveLink = '';
		projectDTO.featured = true;
		projectDTO.createdAt = new Date();
		projectDTO.updatedAt = new Date();

		return projectDTO;
	}
}