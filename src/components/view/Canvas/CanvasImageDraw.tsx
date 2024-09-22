import React, {
  useRef,
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent,
} from "react";

interface Text {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  isDragging: boolean;
}

const CanvasDraw: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [penColor, setPenColor] = useState("#000000");
  const [penSize, setPenSize] = useState(10);
  const [isEraser, setIsEraser] = useState(false);
  const [texts, setTexts] = useState<Text[]>([]);
  const [currentTextId, setCurrentTextId] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");
  const [textSize, setTextSize] = useState(20);
  const [drawingData, setDrawingData] = useState<ImageData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        setCtx(context);

        // Load an image onto the canvas
        const img = new Image();
        img.src = "/assets/hero.png"; // Replace with your image path
        img.onload = () => {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          setDrawingData(
            context.getImageData(0, 0, canvas.width, canvas.height)
          );
        };
      }
    }
  }, []);

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    const clickedText = texts.find((text) => isTextClicked(e, text));
    if (clickedText) {
      setCurrentTextId(clickedText.id);
      setTexts(
        texts.map((text) =>
          text.id === clickedText.id ? { ...text, isDragging: true } : text
        )
      );
    } else {
      setIsDrawing(true);
      draw(e);
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (currentTextId !== null) {
      setTexts(
        texts.map((text) =>
          text.id === currentTextId ? { ...text, isDragging: false } : text
        )
      );
      setCurrentTextId(null);
    } else {
      ctx?.beginPath();
      if (ctx && canvasRef.current) {
        setDrawingData(
          ctx.getImageData(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          )
        );
      }
    }
  };

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx.lineWidth = penSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = isEraser ? "#FFFFFF" : penColor; // Use white color for eraser

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (currentTextId !== null) {
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return;

      const { offsetX, offsetY } = e.nativeEvent;
      setTexts(
        texts.map((text) =>
          text.id === currentTextId ? { ...text, x: offsetX, y: offsetY } : text
        )
      );
      redrawCanvas();
    } else if (isDrawing) {
      draw(e);
    }
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !ctx) return;

    if (drawingData) {
      ctx.putImageData(drawingData, 0, 0);
    }

    texts.forEach((text) => {
      ctx.fillStyle = penColor;
      ctx.font = `${text.size}px Arial`;
      ctx.fillText(text.text, text.x, text.y);
    });
  };

  const isTextClicked = (
    e: MouseEvent<HTMLCanvasElement>,
    text: Text
  ): boolean => {
    if (!ctx) return false;

    const { offsetX, offsetY } = e.nativeEvent;
    const textWidth = ctx.measureText(text.text).width;
    const textHeight = text.size; // Approximation of text height

    return (
      offsetX >= text.x &&
      offsetX <= text.x + textWidth &&
      offsetY >= text.y - textHeight &&
      offsetY <= text.y
    );
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "canvas-image.png";
      link.click();
    }
  };

  const toggleEraser = () => {
    setIsEraser(!isEraser);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleTextSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextSize(parseInt(e.target.value));
  };

  const addTextToCanvas = () => {
    if (ctx && textInput) {
      const canvas = canvasRef.current;
      if (canvas) {
        const id = texts.length ? texts[texts.length - 1].id + 1 : 1;
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const newText = {
          id,
          text: textInput,
          x,
          y,
          size: textSize,
          isDragging: false,
        };
        setTexts([...texts, newText]);
        setTextInput("");
        redrawCanvas();
      }
    }
  };

  const removeText = (id: number) => {
    setTexts(texts.filter((text) => text.id !== id));
    redrawCanvas();
  };

  return (
    <div>
      <div>
        <label>
          Pen Color:
          <input
            type="color"
            value={penColor}
            onChange={(e) => setPenColor(e.target.value)}
            disabled={isEraser}
          />
        </label>
        <label>
          Pen/Eraser Size:
          <input
            type="number"
            min="1"
            max="50"
            value={penSize}
            onChange={(e) => setPenSize(parseInt(e.target.value))}
          />
        </label>
        <button onClick={toggleEraser}>
          {isEraser ? "Switch to Pen" : "Switch to Eraser"}
        </button>
      </div>
      <div>
        <label>
          Text:
          <input type="text" value={textInput} onChange={handleTextChange} />
        </label>
        <label>
          Text Size:
          <input
            type="number"
            min="10"
            max="100"
            value={textSize}
            onChange={handleTextSizeChange}
          />
        </label>
        <button onClick={addTextToCanvas}>Add Text</button>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={handleMouseMove}
      />
      <button onClick={downloadImage}>Download Image</button>
      <div>
        <h3>Added Texts:</h3>
        {texts.map((text) => (
          <div key={text.id}>
            <span>{text.text}</span>
            <button onClick={() => removeText(text.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanvasDraw;
