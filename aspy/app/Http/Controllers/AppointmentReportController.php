<?php

namespace App\Http\Controllers;

use App\Models\AppointmentReport;
use Illuminate\Http\Request;

class AppointmentReportController extends Controller
{
    public function index()
    {
        return AppointmentReport::with('appointment')->get();
    }

    public function show($id)
    {
        return AppointmentReport::with('appointment')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'appointment_id' => 'required|integer|unique:appointment_reports,appointment_id',
            'comments' => 'required|string',
            'sign' => 'required|string',
            'created_by' => 'sometimes|string',
        ]);

        return AppointmentReport::create($validated);
    }

    public function update(Request $request, $id)
    {
        $report = AppointmentReport::findOrFail($id);
        $validated = $request->validate([
            'comments' => 'string',
            'sign' => 'string',
            'modified_by' => 'sometimes|string',
        ]);
        $report->update($validated);
        return $report;
    }

    public function destroy($id)
    {
        $report = AppointmentReport::findOrFail($id);
        $report->delete();
        return response()->noContent();
    }
}
