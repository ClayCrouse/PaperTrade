
function Balance({value}) {
  return (
    <div>
        <p>
            value: ${value}
        </p>
        <p>
            percentage: {(value)/10000 * 100}%
        </p>
    </div>
  );
}

export default Balance;