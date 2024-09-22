import { useEffect, useRef, useState, MouseEvent } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;

      const context = canvas.getContext("2d");
      if (context) {
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
      }
    }
  }, []);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent as MouseEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
    setIsDrawing(true);
    event.preventDefault();
  };

  const draw = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = event.nativeEvent as MouseEvent;
    if (contextRef.current) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
    event.preventDefault();
  };

  const stopDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
    }
    setIsDrawing(false);
  };

  const setToDraw = () => {
    if (contextRef.current) {
      contextRef.current.globalCompositeOperation = "source-over";
    }
  };

  const setToErase = () => {
    if (contextRef.current) {
      contextRef.current.globalCompositeOperation = "destination-out";
    }
  };

  const saveImageToLocal = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const link = event.currentTarget;
    if (canvasRef.current) {
      link.setAttribute("download", "canvas.png");
      const image = canvasRef.current.toDataURL("image/png");
      link.setAttribute("href", image);
    }
  };

  return (
    <div>
      <canvas
        className="canvas-container"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
      <div>
        <button onClick={setToDraw}>Draw</button>
        <button onClick={setToErase}>Erase</button>
        <a
          id="download_image_link"
          href="download_link"
          onClick={saveImageToLocal}
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default DrawingCanvas;
