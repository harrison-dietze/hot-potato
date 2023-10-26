export class CircularQueue<T> {
  private capacity: number; // The maximum number of elements the queue can hold.
  private queue: T[]; // The array to hold the elements of the queue.
  private front: number; // Pointer to the front of the queue.
  private rear: number; // Pointer to the rear of the queue.
  private size: number; // The current number of elements in the queue.

  constructor(capacity: number) {
    this.capacity = capacity;
    this.queue = new Array<T>(capacity); // Initialize the queue with the given capacity.
    this.front = this.rear = -1; // Initialize front and rear pointers as -1 (empty queue).
    this.size = 0; // Initialize size to 0 (empty queue).
  }

  public getCapacity = () => this.capacity;
  public getSize = () => this.size;

  isEmpty(): boolean {
    return this.size == 0; // Check if the queue is empty.
  }

  isFull(): boolean {
    return this.size === this.capacity; // Check if the queue is full.
  }

  enqueue(data: T): void {
    if (this.isFull()) {
      throw new Error("Queue is full"); // If the queue is full, throw an error.
    }

    if (this.isEmpty()) {
      this.front = this.rear = 0; // If the queue is empty, set front and rear to 0.
    } else {
      // console.log();
      // console.log();
      // console.log("rear: " + this.rear);
      this.rear = (this.rear + 1) % this.capacity; // Move rear pointer circularly.
      // console.log();
      // console.log("rear: " + this.rear);
      // console.log();
      // console.log();
    }

    this.queue[this.rear] = data; // Add data to the rear of the queue.

    this.size += 1; // Increase the size of the queue.
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined; // If the queue is empty, return undefined.
    }

    const data = this.queue[this.front]; // Get the data from the front of the queue.
    if (this.front === this.rear) {
      this.front = this.rear = -1; // If there's only one element, reset front and rear.
    } else {
      this.front = (this.front + 1) % this.capacity; // Move front pointer circularly.
    }

    this.size--; // Decrease the size of the queue.
    return data; // Return the dequeued data.
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined; // If the queue is empty, return undefined.
    }

    return this.queue[this.front]; // Return the data at the front of the queue.
  }

  peekAll(): T[] {
    const result: T[] = [];

    if (this.isEmpty()) {
      return result;
    }

    let index = this.front;

    while (index !== this.rear) {
      result.push(this.queue[index]);
      index = (index + 1) % this.capacity;
    }

    result.push(this.queue[this.rear]);

    return result;
  }
}
