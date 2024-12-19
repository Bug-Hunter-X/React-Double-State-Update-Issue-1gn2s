```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array
    console.log('Count changed:', count);
  }, [count]); // Only count is included

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // this line is the issue
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```