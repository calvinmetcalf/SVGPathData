var assert = chai.assert;

describe("Y axis symetry", function() {

  it("should work with an arbitrary path", function() {
    assert.equal(new SVGPathData(
      'm12.5 140c0 0 7.63017 -32.95472 17.21798 -45.085701c0 0 8.60793 -7.043235 12.91188 -7.630171c4.30396 -0.586937 31.109058 -1.173872 31.109058 -1.173872l8.021699 -9.821022h3.717026l1.173872 -15.810194l-3.521618 -3.717024l-1.564688 -9.782503l0.586937 -4.50008h1.760808c0 0 1.138927 -12.71791 0.977752 -14.0879c-0.160463 -1.36928 4.911579 -16.18532 17.628774 -18.17648c12.71719 -1.99188 35.0336 10.50851 35.0336 10.50851l-1.20525 21.55903l-2.34775 6.65242l1.36928 0.39153c0 0 -0.1954 3.71702 -1.76081 6.260173c0 0 -2.15233 10.760974 -7.63017 10.956382l-4.30467 12.521783l-3.71703 4.109267l-2.93468 8.607922l14.67341 17.80493l1.17387 10.36944c0 0 8.52734 7.60521 6.31794 20.04214h-124.68722z'
    ).ySymetry(150).encode(),
      'M12.5 10C12.5 10 20.13017 42.95472000000001 29.71798 55.085701C29.71798 55.085701 38.32591 62.128935999999996 42.62986 62.715872000000005C46.93382 63.30280900000001 73.738918 63.88974400000001 73.738918 63.88974400000001L81.760617 73.710766H85.477643L86.651515 89.52096L83.129897 93.23798400000001L81.565209 103.020487L82.152146 107.520567H83.912954C83.912954 107.520567 85.051881 120.238477 84.890706 121.60846699999999C84.730243 122.977747 89.802285 137.793787 102.51947999999999 139.784947C115.23666999999999 141.776827 137.55308 129.276437 137.55308 129.276437L136.34783 107.71740700000001L134.00008 101.064987L135.36936 100.673457C135.36936 100.673457 135.17396 96.956437 133.60855 94.413284C133.60855 94.413284 131.45622 83.65231 125.97838000000002 83.456902L121.67371000000001 70.935119L117.95668000000002 66.825852L115.02200000000002 58.217929999999996L129.69541 40.413L130.86928 30.04356C130.86928 30.04356 139.39662 22.43835 137.18722 10.001419999999996H12.5z');
  });

  it("should work when reversed", function() {
    assert.equal(new SVGPathData(
      'm12.5 140c0 0 7.63017 -32.95472 17.21798 -45.085701c0 0 8.60793 -7.043235 12.91188 -7.630171c4.30396 -0.586937 31.109058 -1.173872 31.109058 -1.173872l8.021699 -9.821022h3.717026l1.173872 -15.810194l-3.521618 -3.717024l-1.564688 -9.782503l0.586937 -4.50008h1.760808c0 0 1.138927 -12.71791 0.977752 -14.0879c-0.160463 -1.36928 4.911579 -16.18532 17.628774 -18.17648c12.71719 -1.99188 35.0336 10.50851 35.0336 10.50851l-1.20525 21.55903l-2.34775 6.65242l1.36928 0.39153c0 0 -0.1954 3.71702 -1.76081 6.260173c0 0 -2.15233 10.760974 -7.63017 10.956382l-4.30467 12.521783l-3.71703 4.109267l-2.93468 8.607922l14.67341 17.80493l1.17387 10.36944c0 0 8.52734 7.60521 6.31794 20.04214h-124.68722z'
    ).ySymetry(150).ySymetry(150).encode(),
      'M12.5 140C12.5 140 20.13017 107.04527999999999 29.71798 94.914299C29.71798 94.914299 38.32591 87.871064 42.62986 87.284128C46.93382 86.69719099999999 73.738918 86.11025599999999 73.738918 86.11025599999999L81.760617 76.289234H85.477643L86.651515 60.47904L83.129897 56.76201599999999L81.565209 46.979513L82.152146 42.479433H83.912954C83.912954 42.479433 85.051881 29.761522999999997 84.890706 28.39153300000001C84.730243 27.022253000000006 89.802285 12.206212999999991 102.51947999999999 10.215053000000012C115.23666999999999 8.223173000000003 137.55308 20.723563000000013 137.55308 20.723563000000013L136.34783 42.28259299999999L134.00008 48.935013L135.36936 49.326543C135.36936 49.326543 135.17396 53.043563000000006 133.60855 55.586715999999996C133.60855 55.586715999999996 131.45622 66.34769 125.97838000000002 66.543098L121.67371000000001 79.064881L117.95668000000002 83.174148L115.02200000000002 91.78207L129.69541 109.587L130.86928 119.95644C130.86928 119.95644 139.39662 127.56165 137.18722 139.99858H12.5z');
  });

});

