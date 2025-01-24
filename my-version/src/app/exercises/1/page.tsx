// export interface ExerciseOneProps {}
import "./index.css";

const ExerciseOne = () => {
  return (
    <section id="feature">
      <div id="content">
        <header>
          <h2>Lightning-Fast Data Transfers</h2>
          <p className="large muted">
            Experience the power of lightning-fast data transfers, a standout feature
            of this revolutionary encryption solution.
          </p>
        </header>

        <div id="grid">
          <div>
            <img src="/icons/icon-copy.svg" alt="Copy" />
            <h3>Rapid File Transfers</h3>
            <p>Effortlessly transfer large files in a fraction of the time.</p>
          </div>
          <div>
            <img src="/icons/icon-clock.svg" alt="Clock" />
            <h3>Real-Time Streaming</h3>
            <p>
              Get instant access to critical information without any lag or delay.
            </p>
          </div>
        </div>
      </div>

      <div id="media"></div>
    </section>
  );
};

export default ExerciseOne;
