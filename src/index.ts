const getWaterMark = () => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');

    canvas.width = 300;
    canvas.height = 300;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.font = '40px Arial,sans-serif';
    ctx.rotate(0.3);
    ctx.fillText('fengnovo', canvas.width / 8, canvas.height / 8);
    const img = canvas.toDataURL('image/png');

    const style = `background-image: url(${img})`;
    return style;
}


const observeWaterMark = (element: HTMLElement) => {
    const style: string = getWaterMark();
        
    const callback = () => {
        element?.setAttribute('style', style);
        observer.disconnect();
        observer.observe(element, config);
    };
    element?.setAttribute('style', style);
    const observer = new MutationObserver(callback);
    const config = {
        attributes: true
    }
    observer.observe(element, config);
}

const body = document.getElementById('app') as HTMLElement;

observeWaterMark(body);
