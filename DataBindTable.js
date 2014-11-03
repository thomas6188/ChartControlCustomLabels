 var IETable = (dt as System.ComponentModel.IListSource).GetList();
  chChart.DataBindCrossTable(IETable, "Number", "Number", "Start Time,Stop Time","");
 
  foreach (Series sr in chChart.Series)
  {
   sr.ChartType = SeriesChartType.RangeBar;
   sr.YValueType = ChartValueType.Time;
 
   sr.XValueType = ChartValueType.String;
 
  }
