import { DeviceDetectorService } from 'ngx-device-detector';
export abstract class ComponentBase {

	isMobile: boolean | undefined = window.innerWidth < 768;
	isTablet: boolean | undefined = window.innerWidth >= 768 && window.innerWidth < 992;
	isDesktop: boolean | undefined = window.innerWidth >= 992;

	constructor(private deviceService?: DeviceDetectorService) {
		this.setDeviceFlags(window.innerWidth);

		// Optional: Add a resize listener
		window.addEventListener('resize', () => {
			this.setDeviceFlags(window.innerWidth);
		});
	}

	private setDeviceFlags(width: number) {
		this.isMobile = this.deviceService?.isMobile() || width < 768;
		this.isTablet = this.deviceService?.isTablet() || (width >= 768 && width < 992);
		this.isDesktop = !this.isMobile && !this.isTablet;
	}
}